import { ActionsType } from "./redux-store"

export type locationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: locationType
}

export type initialStateType = {
    users: Array<UserType>
}

let initialState:initialStateType = {
    users: [
        {id: 1, followed: false, fullName: 'Dmitry', status: 'I boss', 
        location: {
            city: 'Minsk',
            country: 'Belarus'
        }},
        {id: 2, followed: true, fullName: 'Zhenya', status: 'Small boss', 
        location: {
            city: 'Moscow',
            country: 'Russia'
        }},
        {id: 3, followed: true, fullName: 'Pablo', status: '...', 
        location: {
            city: 'Warshawa',
            country: 'Poland'
        }}
    ]
}

export const userReducer = (state = initialState, action: ActionsType):initialStateType => {
switch (action.type) {
    case 'FOLLOW':
        return {
            ...state, 
            users: 
                state.users.map(el => {
                        if ( el.id === action.userID){
                            return {...el, followed: true}
                        }
                        return el
                    
                })
            
        }
        case 'UN-FOLLOW':
            return {
                ...state, 
                users: 
                    state.users.map(el => {
                            if ( el.id === action.userID){
                                return {...el, followed: false}
                            }
                            return el
                    })
            }
            case 'SET-USERS':
                return {
                    ...state, users:[...state.users, action.users]
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

export const setUsersAC = (users: any) => {
    return {
        type: 'SET-USERS', users
    } as const 
}