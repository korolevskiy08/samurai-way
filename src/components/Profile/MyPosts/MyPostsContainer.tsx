import React, { FC } from 'react'
import {
  addPostActionCreator,
  PostDataType,
} from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { RootState } from '../../../Redux/redux-store'
import { compose, Dispatch } from 'redux'
import {AddPostFormType} from "./AddPost/AddPost";

type mapStateToPropsType = {
  postData: Array<PostDataType>
  value: string
}

type mapDispatchToPropsType = {
  addPostHandler: (textMessage: AddPostFormType) => void
}

export type profilePropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootState): mapStateToPropsType => {
  // отвечает за пропсы значений
  return {
    postData: state.profilePage.postData,
    value: state.profilePage.newPostText,
  }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  // отвечает за коллбэки

  return {
    addPostHandler: (textMessage: AddPostFormType) => {
      console.log(textMessage)
      dispatch(addPostActionCreator(textMessage))
    },
  }
}
const MyPostsComponent = compose<FC>(connect(mapStateToProps, mapDispatchToProps))(MyPosts)

export default MyPostsComponent
