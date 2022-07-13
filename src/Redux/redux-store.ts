import {combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator, setNewPostTextAC} from "./profile-reducer";
import dialogReducer, {addMessageActionCreator, setNewMessageTextAC} from "./dialog-reducer";
import sideBarReducer from "./sideBar-reducer";

export let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBar: sideBarReducer
})

let store = createStore(reducers)

export type ReduxStoreType = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type ActionsType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setNewPostTextAC>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof setNewMessageTextAC>

export default store