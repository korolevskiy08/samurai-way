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
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState:initialStateType = {
    items: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
}

type ActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof toggleIsFetchingAC>

export const userReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                items:
                    state.items.map(el => {
                        if (el.id === action.userID) {
                            return {...el, followed: true}
                        }
                        return el

                    })

            }
        case 'UN-FOLLOW':
            return {
                ...state,
                items:
                    state.items.map(el => {
                        if (el.id === action.userID) {
                            return {...el, followed: false}
                        }
                        return el
                    })
            }
        case 'SET-USERS':
            return {
                ...state, items: action.item
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET-TOTAL-COUNT":
            return {
                ...state,
                totalUsersCount: action.count
            }
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
    
        default:
            return state
    }
}

export const followAC = (userID: any) => {
    return {
        type: 'FOLLOW', userID
    } as const
}
export const unFollowAC = (userID: any) => {
    return {
        type: 'UN-FOLLOW', userID
    } as const
}
export const setUsersAC = (item: any) => {
    return {
        type: 'SET-USERS', item
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE', currentPage
    } as const
}
export const setTotalCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT', count: totalUsersCount
    } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING', isFetching
    } as const
}
