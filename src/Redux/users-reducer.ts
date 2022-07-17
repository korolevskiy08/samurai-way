import { ActionsType } from "./redux-store"

export type locationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: locationType
}

export type initialStateType = {
    users: Array<UserType>
}

let initialState = {
    users: [
        {id: 1,photoURL:'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v937-aew-111_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8ce2cd03f94f2baddcb332cfb50f78b9', followed: false, fullName: 'Dmitry', status: 'I boss', 
        location: {
            city: 'Minsk',
            country: 'Belarus'
        }},
        {id: 2,photoURL:'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v937-aew-111_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8ce2cd03f94f2baddcb332cfb50f78b9', followed: true, fullName: 'Zhenya', status: 'Small boss', 
        location: {
            city: 'Moscow',
            country: 'Russia'
        }},
        {id: 3,photoURL:'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v937-aew-111_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8ce2cd03f94f2baddcb332cfb50f78b9', followed: true, fullName: 'Pablo', status: '...', 
        location: {
            city: 'Warshawa',
            country: 'Poland'
        }}
    ]
}

export const userReducer = (state:initialStateType = initialState, action: ActionsType):initialStateType => {
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