import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let dialogsData = [
    {id: 1, name: 'Marusia'},
    {id: 2, name: 'Pablo'},
    {id: 3, name: 'Alex'}
]

let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'By'}
]

let dialogsElement = dialogsData.map((el) => <DialogItem name={el.name} id={el.id} /> )
let messagesElement = messagesData.map((el) => <Message text={el.message} id={el.id}/>)

let Dialogs = (props: any) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={c.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;