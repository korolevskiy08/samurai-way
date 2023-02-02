import React, {FC, SyntheticEvent} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddMessageFormType = {
    handleSubmit: (values: string) => void
    newMessageBody: string
}

export const AddMessage: FC<InjectedFormProps<AddMessageFormType>> = ({handleSubmit}) => {
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field component="input" name="newMessageBody" placeholder="Enter your message" />
                </div>
                <div>
                    <button type='submit'>Add Message</button>
                </div>
            </form>
    );
};

export const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: "dialogAddMessageForm"})(AddMessage)
