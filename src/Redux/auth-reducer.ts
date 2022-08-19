import { AppThunk } from './redux-store'
import { userAPI } from '../api/api'

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
        isAuth: true,
      }
    }
    default:
      return state
  }
}

export const setUserDataAC = (userId: number, email: string, login: string) => {
  return {
    type: 'SET-USER-DATA',
    data: { userId, email, login },
  } as const
}

export const setUserDataThunkCreator = (): AppThunk => {
  return (dispatch) => {
    userAPI.setUserData().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setUserDataAC(id, email, login))
      }
    })
  }
}
