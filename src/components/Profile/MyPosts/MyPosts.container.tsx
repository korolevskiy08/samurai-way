import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import Post from "./Post/Post";
import {addPostActionCreator, PostDataType} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

type ProfilePageType = {
    dispatch: (value: any) => void
    postData: PostDataType[]
}

let MyPostsComponent = (props: ProfilePageType) => {

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
            <MyPosts
                postData={props.postData}
                value={value}
                onChange={onChange}
                addPostHandler={addPostHandler}
                onKeyPressHandler={onKeyPressHandler}
            />
        </div>
    )
}

export default MyPostsComponent;