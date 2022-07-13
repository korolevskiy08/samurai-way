import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {addPostActionCreator, setNewPostTextAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootState} from "../../../Redux/redux-store";
import {Dispatch} from "redux";


let mapStateToProps = (state: RootState) => { // отвечает за пропсы значений
    return {
        postData: state.profilePage.postData,
        value: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => { // отвечает за коллбэки

    return {
        addPostHandler () {
            dispatch(addPostActionCreator())
        },
        onChangeTextPost (event: ChangeEvent<HTMLInputElement>) {
            dispatch(setNewPostTextAC(event.currentTarget.value))
        }
    }
}
const MyPostsComponent = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsComponent;