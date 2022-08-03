import {combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator, setNewPostTextAC} from "./profile-reducer";
import dialogReducer, {addMessageActionCreator, setNewMessageTextAC} from "./dialog-reducer";
import sideBarReducer from "./sideBar-reducer";
import{ followAC, setUsersAC, unFollowAC, userReducer } from './users-reducer';
import { authReducer } from "./auth-reducer";

export let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer,
    sideBar: sideBarReducer,
    auth: authReducer
})

let store = createStore(reducers)

export type ReduxStoreType = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
//@ts-ignore
window.store = store