import React from 'react';
import c from './formControl.module.css'

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
