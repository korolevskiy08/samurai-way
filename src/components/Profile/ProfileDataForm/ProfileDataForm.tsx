import React, {FC, SyntheticEvent} from 'react';
import c from "../ProfileInfo/ProfileInfo.module.css";
import {createField, Input} from "../../../command/FormControl/FormControl";
import {InjectedFormProps, reduxForm} from "redux-form";

export type FormEditProfileType = {
    handleSubmit: (values: SyntheticEvent<HTMLFormElement>) => void
    fullName: string;
    aboutMe: string;
    lookingForJob: string;
    lookingForAJobDescription: string;
    myProfessionalSkills: string;
}

export const ProfileDataForm:FC <InjectedFormProps<FormEditProfileType>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className={c.profileInfo}>
                <div className={c.description}>
                    <span>Full name: {createField('', 'FullName', 'fullName', Input, [], 'text')}</span>
                    <span>aboutMe: {createField('', 'about me', 'aboutMe', Input, [], 'text' )}</span>
                    <span>looking for a job: {createField('', 'lookingForJob', 'lookingForJob', Input, [], 'checkbox' )}</span>
                    <span>looking for a job a description: {createField('', 'lookingForAJobDescription', 'lookingForAJobDescription', Input, [], 'text' )}</span>
                    <span>My professional skills: {createField('', 'myProfessionalSkills', 'myProfessionalSkills', Input, [], '')}</span>
                </div>
            </div>
            <button>Save</button>
        </form>
    );
};

const ProfileDataFormRedux = reduxForm<FormEditProfileType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormRedux
