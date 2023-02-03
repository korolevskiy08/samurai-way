import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import profileReducer, { ProfileActionType } from './profile-reducer'
import dialogReducer, { DialogsActionType } from './dialog-reducer'
import sideBarReducer from './sideBar-reducer'
import { userReducer, UsersActionType } from './users-reducer'
import { ActionAuthType, authReducer } from './auth-reducer'
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {FormAction, reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";

export type ActionsType = UsersActionType | DialogsActionType | ActionAuthType | ProfileActionType | FormAction

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>

export let reducer = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: userReducer,
  sideBar: sideBarReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

type ReducersType = typeof reducer
export type AppStateType = ReturnType<ReducersType>
export type ReduxStoreType = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType> //typeof store.dispatch

export default store
//@ts-ignore
window.store = store
