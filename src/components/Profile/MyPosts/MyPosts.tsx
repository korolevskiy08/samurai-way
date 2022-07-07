import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import { Button } from "../../Button/Button";
import { addPostActionCreator, addPostActionCreatorType } from "../../../Redux/profile-reducer";

type PostDataType = {
    id: number
    message: string
    like: number
}
type ProfilePageType = {
    postData: Array<PostDataType>
    dispatch: (value: any) => void
}



let MyPosts = (props: ProfilePageType) => {

    let postElements = props.postData.map((el, i) => <Post key={i} message={el.message} like={el.like} />)

    const [value, setValue] = useState("it-kamasutra")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    const addPostHandler = () => {
        // props.dispatch({ type: 'ADD-POST', postMessage: value })
        let action = addPostActionCreator(value)
        props.dispatch(action)
        setValue('')
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.ctrlKey && event.code === 'Enter') {
            addPostHandler()
        }
    }

    return (
        <div>
            <div className={c.myPosts}>
                My posts
            </div>
            <div className={c.newPost}>
                <div>
                    <input value={value}
                        onChange={onChange}
                        onKeyPress={onKeyPressHandler}
                        className={c.inputText} />
                </div>
                <div>
                    <Button name={'Add Post'} callBack={addPostHandler} />
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