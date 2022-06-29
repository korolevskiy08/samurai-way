import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Button} from "../Button/Button";
import { addMessageActionCreator, addMessageActionCreatorType, addPostActionCreatorType } from '../../Redux/state';

type DialogsDataType = {
    id: number
    name: string
}
type MessagesDataType = {
    id: number
    message: string
}
type DialogPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    dispatch: (value: any) => void
}

let Dialogs = (props: DialogPageType) => {

    let [dialogMessage, setDialogMessage] = useState('')

    let dialogsElement = props.dialogsData.map((el, i) => <DialogItem key={i} name={el.name} id={el.id}/>)
    let messagesElement = props.messagesData.map((el, i) => <Message key={i} text={el.message} id={el.id}/>)

    const newMessageText = (event: ChangeEvent<HTMLInputElement>) => {
        let textMessage = event.currentTarget.value
        setDialogMessage(textMessage)
        console.log(textMessage)

    }

    const addMessage = () => {
        // props.dispatch({type: 'ADD-NEW-MESSAGE', dialogMessage: dialogMessage})  
        let action = addMessageActionCreator(dialogMessage)
        props.dispatch(action)
        setDialogMessage('')
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.ctrlKey && event.code === 'Enter'){
            addMessage()
        }
    }

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