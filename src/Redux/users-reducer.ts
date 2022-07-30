import {ActionsType} from "./redux-store"

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
}

let initialState = {
    items: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 2
}

export const userReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
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
                ...state, items: [...state.items, ...action.item]
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