import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type DialogsDataType = {
    id: number
    name: string
}
type MessagesDataType = {
    id: number
    message: string
}
type DialogPageType = {
    dialogsData:Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

let Dialogs = (props: DialogPageType) => {
    let dialogsElement = props.dialogsData.map((el, i) => <DialogItem key={i} name={el.name} id={el.id} /> )
    let messagesElement = props.messagesData.map((el, i) => <Message key={i} text={el.message} id={el.id}/>)
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