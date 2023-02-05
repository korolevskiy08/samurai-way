import {userAPI} from '../api/api'
import {AppDispatch, AppThunk} from './redux-store'
import {updateObjectInArray} from "../command/utils/object-helpers";

export type PhotosType = {
    small: any
    large: any
}
export type ItemsType = {
    name: string
    id: number

    photos: PhotosType

    status: string
    followed: boolean
}
export type initialStateType = {
    items: Array<ItemsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

let initialState: initialStateType = {
    items: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

export type UsersActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleFollowingProgressAC>

export const userReducer = (
    state: initialStateType = initialState,
    action: UsersActionType
): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                // items: state.items.map((el) => {
                //     if (el.id === action.userID) {
                //         return {...el, followed: true}
                //     }
                //     return el
                // }),
                items: updateObjectInArray(state.items, action.userID, 'id', {followed: true})
            }
        case 'UN-FOLLOW':
            return {
                ...state,
                // items: state.items.map((el) => {
                //     if (el.id === action.userID) {
                //         return {...el, followed: false}
                //     }
                //     return el
                // }),
                items: updateObjectInArray(state.items, action.userID, 'id', {followed: false})

            }
        case 'SET-USERS':
            return {
                ...state,
                items: action.item,
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case 'SET-TOTAL-COUNT':
            return {
                ...state,
                totalUsersCount: action.count,
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case 'TOGGLE-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetchingDisable
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id !== action.userId),
            }
        default:
            return state
    }
}

export const followAC = (userID: any) => {
    return {
        type: 'FOLLOW',
        userID,
    } as const
}
export const unFollowAC = (userID: any) => {
    return {
        type: 'UN-FOLLOW',
        userID,
    } as const
}
export const setUsersAC = (item: any) => {
    return {
        type: 'SET-USERS',
        item,
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,
    } as const
}
export const setTotalCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        count: totalUsersCount,
    } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching,
    } as const
}
export const toggleFollowingProgressAC = (isFetchingDisable: boolean, userId: number) => {
    return {
        type: 'TOGGLE-FOLLOWING-PROGRESS',
        isFetchingDisable,
        userId,
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number): AppThunk => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    try {
        const data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalCountAC(data.totalCount))
        dispatch(setCurrentPageAC(currentPage))
    } catch (e) {
        dispatch(toggleIsFetchingAC(false))
    }
}
const followUnFollow = async (dispatch: AppDispatch, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgressAC(true, userId))
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgressAC(false, userId))
}
export const unFollowThunkCreator = (userId: number): AppThunk => async (dispatch) => {
    await followUnFollow(dispatch, userId, userAPI.unFollow.bind(userAPI), unFollowAC)
}
export const followThunkCreator = (userId: number): AppThunk => async (dispatch) => {
    await followUnFollow(dispatch, userId, userAPI.follow.bind(userAPI), followAC)

    dispatch(toggleFollowingProgressAC(false, userId))
}
