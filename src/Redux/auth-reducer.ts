import {AppThunk} from './redux-store'
import {ReqLoginType, userAPI} from '../api/api'
import {stopSubmit} from "redux-form";

export type DataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type ActionAuthType = ReturnType<typeof setUserDataAC>

let initialState: DataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action: ActionAuthType): DataType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: action.data.isAuth,
            }
        }
        default:
            return state
    }
}

export const setUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        data: {userId, email, login, isAuth},
    } as const
}

export const setUserDataThunkCreator = (): AppThunk => {
    return (dispatch) => {
        userAPI.setUserData().then((response) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setUserDataAC(id, email, login, true))
            }
        })
    }
}

export const loginTC = (data: ReqLoginType): AppThunk => async dispatch => {
    await userAPI.login(data)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserDataThunkCreator())
            } else {
                if (res.data.resultCode !== 0) {
                    let message = res.data.messages.length > 0 ? res.data.messages[0] : 'some error'
                    dispatch(stopSubmit("login", {_error: message}))
                }
            }
        })
}

export const logout = (): AppThunk => async dispatch => {
    try {
        const res = await userAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false))
        }
    } catch (e) {

    }
}
