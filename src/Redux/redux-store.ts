import {combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator} from "./profile-reducer";
import dialogReducer, {addMessageActionCreator} from "./dialog-reducer";
import sideBarReducer from "./sideBar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBar: sideBarReducer
})

let store = createStore(reducers)

export type ReduxStoreType = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type ActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof addMessageActionCreator>

export default store