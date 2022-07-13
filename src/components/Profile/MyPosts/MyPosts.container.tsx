import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {addPostActionCreator, setNewPostTextAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";
import {RootState} from "../../../Redux/redux-store";
import {Dispatch} from "redux";


// let MyPostsComponent = () => {
//     return (
//         <div>
//             <StoreContext.Consumer>
//                 {
//                     (store) => {
//                         const onChangeTextPost = (event: ChangeEvent<HTMLInputElement>) => {
//                             store.dispatch(setNewPostTextAC(event.currentTarget.value))
//                         }
//
//                         const addPostHandler = () => {
//                             // props.dispatch({ type: 'ADD-POST', postMessage: value })
//                             let action = addPostActionCreator(store.newPostText)
//                             store.dispatch(action)
//                         }
//
//                         const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
//                             if (event.ctrlKey && event.code === 'Enter') {
//                                 addPostHandler()
//                             }
//                         }
//
//                         return (
//                             <MyPosts
//                                 postData={store.getState().profilePage.postData}
//                                 value={value}
//                                 onChange={onChangeTextPost}
//                                 addPostHandler={addPostHandler}
//                                 onKeyPressHandler={onKeyPressHandler}
//                             />)
//                     }
//
//                 }
//
//             </StoreContext.Consumer>
//         </div>
//     )
// }

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
        onChangeTextPost (event: KeyboardEvent<HTMLInputElement>) {
            dispatch(setNewPostTextAC(event.currentTarget.value))
        }
    }
}
const MyPostsComponent = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsComponent;