import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./Redux/state";

type PostDataType = {
    id: number
    message: string
    like: number
}
type DialogsDataType = {
    id: number
    name: string
}
type MessagesDataType = {
    id: number
    message: string
}
type ProfilePageType = {
    postData: Array<PostDataType>
}
type DialogPageType = {
    dialogsData:Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
type FriendsType = {
    id: number
    name: string
    status: string
}
type SideBarType = {
    friends: Array<FriendsType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sideBar: SideBarType
}

export let rerenderEntireTree = (state:RootStateType) => {


    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );


}