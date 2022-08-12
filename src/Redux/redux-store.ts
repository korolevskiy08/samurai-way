import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer, {ProfileActionType} from "./profile-reducer";
import dialogReducer, {DialogsActionType} from "./dialog-reducer";
import sideBarReducer from "./sideBar-reducer";
import {userReducer, UsersActionType} from './users-reducer';
import {ActionAuthType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"

export type ActionsType = UsersActionType | DialogsActionType | ActionAuthType | ProfileActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>

export let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer,
    sideBar: sideBarReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type ReduxStoreType = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>//typeof store.dispatch


export default store
//@ts-ignore
window.store = store