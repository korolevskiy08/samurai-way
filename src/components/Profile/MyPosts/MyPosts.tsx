import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";


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
            <Post message='Hi, how are you?' like={6}/>
            <Post message='My first post' like={7}/>
            <Post message='Hello, my friend' like={99}/>
        </div>
    )
}

export default MyPosts;