import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";

type PostDataType = {
    id: number
    message: string
    like: number
}
type ProfilePageType = {
    postData: Array<PostDataType>
}

let MyPosts = (props: ProfilePageType) => {

    let postElements = props.postData.map((el, i) => <Post key={i} message={el.message} like={el.like}/>)

    return (
        <div>
            <div className={c.myPosts}>
                My posts
            </div>
            <div className={c.newPost}>
                <div>
                    <textarea className={c.inputText}></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={c.newPost}>
                New post
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;