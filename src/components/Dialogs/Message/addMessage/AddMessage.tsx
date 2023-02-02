import React, {FC, SyntheticEvent} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../../../../command/FormControl/FormControl";
import {maxLength, required} from "../../../../command/utils/validators/validators";

export type AddMessageFormType = {
    handleSubmit: (values: string) => void
    newMessageBody: string
}

const maxLengthMessage = maxLength(100)

export const AddMessage: FC<InjectedFormProps<AddMessageFormType>> = ({handleSubmit}) => {
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field component={FormControl} validate={[required, maxLengthMessage]} name="newMessageBody" placeholder="Enter your message" />
                </div>
                <div>
                    <button type='submit'>Add Message</button>
                </div>
            </form>
    );
};

export const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: "dialogAddMessageForm"})(AddMessage)
