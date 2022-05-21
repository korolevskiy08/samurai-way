import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




let Dialogs = (props: any) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItem name='Marusia' id={1}/>
                <DialogItem name='Pablo' id={2}/>
                <DialogItem name='Alex' id={3}/>
            </div>
            <div className={c.messages}>
                <Message text='Hello' />
                <Message text='How are you?' />
                <Message text='By' />
            </div>
        </div>
    )
}

export default Dialogs;