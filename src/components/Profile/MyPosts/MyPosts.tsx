import c from './MyPosts.module.css'
import Post from './Post/Post'
import {profilePropsType} from './MyPostsContainer'
import {AddPostFormRedux, AddPostFormType} from "./AddPost/AddPost";
import React from "react";

export const MyPosts = (props: profilePropsType) => {

    let {addPostHandler, postData} = props;
    console.log('My posts render')

    const postElements = postData.map((el, i) => {
        return <Post key={i} message={el.message} like={el.like}/>
    })

    const addPost = (textMessage: AddPostFormType) => {
        addPostHandler(textMessage)
    }

    return (
        <>
            <div className={c.myPosts}>My posts</div>
            <div className={c.newPost}>
                <AddPostFormRedux onSubmit={addPost}/>
            </div>
            <div className={c.newPost}>New post</div>
            {postElements}
        </>
    )
}

export default MyPosts
