import React, {ChangeEvent} from "react";
import c from './MyPosts.module.css';
import {Button} from "../../Button/Button";
import Post from "./Post/Post";
import { profilePropsType } from "./MyPosts.container";

export let MyPosts = ({
                   value,
                   onChangeTextPost,
                   addPostHandler,
                   postData
               }: profilePropsType) => {

    let postElements = postData.map((el, i) => {
        return(
            <Post key={i} message={el.message} like={el.like}/>
        )
    })

    return (
        <div>
            <div className={c.myPosts}>
                My posts
            </div>
            <div className={c.newPost}>
                <div>
                    <input
                        value={value}
                        onChange={onChangeTextPost}
                        className={c.inputText}/>
                </div>
                <div>
                    <Button name={'Add Post'} callBack={addPostHandler}/>
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