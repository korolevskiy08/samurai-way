import React, {FC} from 'react';
import c from "../MyPosts.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddPostFormType = {
    handleSubmit: (values: string) => void
    newPostBody: string
}

export const AddPost:FC<InjectedFormProps<AddPostFormType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field className={c.inputText} component="input" name="newPostBody" placeholder="Enter your post" />
            </div>
            <div>
                <button type="submit">Add post</button>
            </div>
        </form>
    );
};

export const AddPostFormRedux = reduxForm<AddPostFormType>({form: "newPostForm"})(AddPost)
