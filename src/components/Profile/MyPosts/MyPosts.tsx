import React, {ChangeEvent, useState} from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {Button} from "../../Button/Button";

type PostDataType = {
    id: number
    message: string
    like: number
}
type ProfilePageType = {
    postData: Array<PostDataType>
    addPost: (postMessage: string) => void
}

let MyPosts = (props: ProfilePageType) => {

    let postElements = props.postData.map((el, i) => <Post key={i} message={el.message} like={el.like}/>)

    const [value, setValue] = useState("")

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.currentTarget.value)
    }

    const addPostHandler = () => {
        props.addPost(value)
        console.log(value)
    }

    return (
        <div>
            <div className={c.myPosts}>
                My posts
            </div>
            <div className={c.newPost}>
                <div>
                    <textarea value={value} onChange={onChange} className={c.inputText}></textarea>
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