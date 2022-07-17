import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {addPostActionCreator, PostDataType, setNewPostTextAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootState} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    postData: Array<PostDataType>
    value: string
}

type mapDispatchToPropsType = {
    addPostHandler: ()=>void
    onChangeTextPost: (event: ChangeEvent<HTMLInputElement>) => void
}

export type profilePropsType = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: RootState):mapStateToPropsType => { // отвечает за пропсы значений
    return {
        postData: state.profilePage.postData,
        value: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => { // отвечает за коллбэки

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