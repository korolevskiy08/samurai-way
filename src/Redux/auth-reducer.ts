export type DataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type ActionAuth = ReturnType<typeof setUserDataAC>

let initialState:DataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionAuth):DataType => {
    switch(action.type) {
            case 'SET-USER-DATA':{
                return {
                    ...state,
                    ...action.data,
                    isAuth: true
                }
            }
            default:
        return state
    }
}

export const setUserDataAC = (userId: any, email: any, login: any) => {
    return {
        type: 'SET-USER-DATA', data: {userId, email, login}
    } as const
}