import React, {FC} from 'react';
import c from "../MyPosts.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../command/utils/validators/validators";
import {Input} from "../../../../command/FormControl/FormControl";

export type AddPostFormType = {
    handleSubmit: (values: string) => void
    newPostBody: string
}

const maxLength10 = maxLength(10)

export const AddPost:FC<InjectedFormProps<AddPostFormType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field className={c.inputText} component={Input} name="newPostBody" placeholder="Enter your post" validate={[required, maxLength10]} />
            </div>
            <div>
                <button type="submit">Add post</button>
            </div>
        </form>
    );
};

export const AddPostFormRedux = reduxForm<AddPostFormType>({form: "newPostForm"})(AddPost)
