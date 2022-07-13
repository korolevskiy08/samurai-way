import React, {ChangeEvent} from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Button} from "../Button/Button";
import {DialogsDataType, MessagesDataType} from '../../Redux/dialog-reducer';

type DialogPageType = {
    dialogMessage: string
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    onChangeNewMessageText: (event: ChangeEvent<HTMLInputElement>) => void
    addMessage: () => void
}

export let Dialogs = ({
                   dialogsData,
                   messagesData,
                          onChangeNewMessageText,
                   addMessage,
                   dialogMessage
               }: DialogPageType) => {
    console.log(dialogMessage)
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
                    <input onChange={onChangeNewMessageText}
                           value={dialogMessage}
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