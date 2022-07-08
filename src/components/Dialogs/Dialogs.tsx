import React, {ChangeEvent, KeyboardEvent} from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Button} from "../Button/Button";
import {DialogsDataType, MessagesDataType} from '../../Redux/dialog-reducer';

type DialogPageType = {
    dialogMessage: string
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: (event: ChangeEvent<HTMLInputElement>) => void
    addMessage: () => void
    onKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>) => void
}

let Dialogs = ({
                   dialogsData,
                   messagesData,
                   newMessageText,
                   addMessage,
                   onKeyPressHandler,
                   dialogMessage
               }: DialogPageType) => {

    let dialogsElement = dialogsData.map((el, i) => <DialogItem key={i} name={el.name} id={el.id}/>)
    let messagesElement = messagesData.map((el, i) => <Message key={i} text={el.message} id={el.id}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={c.messages}>
                {messagesElement}
            </div>
            <div>
                <div>
                    <input onChange={newMessageText}
                           value={dialogMessage}
                           onKeyPress={onKeyPressHandler}
                    />
                </div>
                <div>
                    <Button name={'Add Message'} callBack={addMessage}/>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;