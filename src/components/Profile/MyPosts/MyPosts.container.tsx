import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../store.context";


let MyPostsComponent = () => {
    const [value, setValue] = useState("it-kamasutra")
    return (
        <div>
            <StoreContext.Consumer>
                {
                (store) => {
                    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
                        setValue(event.currentTarget.value)
                    }

                    const addPostHandler = () => {
                        // props.dispatch({ type: 'ADD-POST', postMessage: value })
                        let action = addPostActionCreator(value)
                        store.dispatch(action)
                        setValue('')
                    }

                    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
                        if (event.ctrlKey && event.code === 'Enter') {
                            addPostHandler()
                        }
                    }

                    return (
                        <MyPosts
                            postData={store.getState().profilePage.postData}
                            value={value}
                            onChange={onChange}
                            addPostHandler={addPostHandler}
                            onKeyPressHandler={onKeyPressHandler}
                        />)
                }

            }

            </StoreContext.Consumer>
        </div>
    )
}

export default MyPostsComponent;