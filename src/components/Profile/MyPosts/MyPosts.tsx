import React, {ChangeEvent} from "react";
import c from './MyPosts.module.css';
import {Button} from "../../Button/Button";
import {PostDataType} from "../../../Redux/profile-reducer";
import Post from "./Post/Post";

type MyPostType = {
    value: string
    onChangeTextPost: (event: ChangeEvent<HTMLInputElement>) => void
    addPostHandler: () => void
    postData: Array<PostDataType>
}

export let MyPosts = ({
                   value,
                   onChangeTextPost,
                   addPostHandler,
                   postData
               }: MyPostType) => {
    console.log(value)
    let postElements = postData.map((el, i) => <Post key={i} message={el.message} like={el.like}/>)

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