import React, {ReactNode} from 'react';
import c from './formControl.module.css'
import {Field} from "redux-form";

export const FormControl = ({meta, children}: any) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={`${c.formControl} ${hasError ? c.error : ''}`}>
            {children}
            {hasError && <span className={c.error}>{meta.error}</span>}
        </div>
    );
};


export const Input = ({input, ...props}: any) => {
    return <FormControl {...props}>{<input {...input} {...props} />}</FormControl>
};

export const TextArea = ({textarea, ...props}: any) => {
    return <FormControl {...props}>{<textarea {...textarea} {...props} />}</FormControl>
};

export const createField =
    (className: string, placeholder: string, name: string, component: ReactNode, required: any, type: string) => {
    return (
        <div style={{display: 'flex'}}>
            <Field className={className} placeholder={placeholder} name={name} component={component} validate={required} type={type} />
        </div>
    )
}
