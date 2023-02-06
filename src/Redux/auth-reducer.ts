import {AppThunk} from './redux-store'
import {ReqLoginType, securityAPI, userAPI} from '../api/api'
import {stopSubmit} from "redux-form";
import axios from "axios";

export type DataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captcha: string | null
}

export type ActionAuthType = ReturnType<typeof setUserDataAC> | ReturnType<typeof getCaptchaUrlSuccess>

let initialState: DataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
}

export const authReducer = (state = initialState, action: ActionAuthType): DataType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: action.data.isAuth
            }
        case "GET-CAPTCHA-URL-SUCCESS":
            return {
                ...state,
                captcha: action.data.captchaUrl
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

export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {
        type: 'GET-CAPTCHA-URL-SUCCESS',
        data: {captchaUrl},
    } as const
}

export const setUserDataThunkCreator = (): AppThunk => async dispatch => {
    try {
        const response = await userAPI.setUserData()

        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setUserDataAC(id, email, login, true))
        }
    } catch (e) {
        if (axios.isAxiosError(e)) {
        }
    }
}

export const loginTC = (data: ReqLoginType): AppThunk => async dispatch => {
    try {
        const res = await userAPI.login(data)

        if (res.data.resultCode === 0) {
            dispatch(setUserDataThunkCreator())
        } else {
            if (res.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            let message = res.data.messages.length > 0 ? res.data.messages[0] : 'some error'
            dispatch(stopSubmit("login", {_error: message}))
        }
    } catch (e) {
        if (axios.isAxiosError(e)) {
        }
    }
}

export const logout = (): AppThunk => async dispatch => {
    try {
        const res = await userAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false))
        }
    } catch (e) {
        if (axios.isAxiosError(e)) {
        }
    }
}

export const getCaptchaUrl = (): AppThunk => async dispatch => {
    try {
        const res = await securityAPI.getCaptcha()
        const captchaUrl = res.data.url

        dispatch(getCaptchaUrlSuccess(captchaUrl))
    } catch (e) {
        if (axios.isAxiosError(e)) {
        }
    }
}
