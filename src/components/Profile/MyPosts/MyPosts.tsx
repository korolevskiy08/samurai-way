import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";


let postData = [
    {id: 1, message: 'Hi, how are you?', like: 6},
    {id: 2, message: 'My first post', like: 7},
    {id: 3, message: 'Hello, my friend', like: 99}
]

let postElements = postData.map(el => <Post message={el.message} like={el.like} />)

let MyPosts = () => {
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