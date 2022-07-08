import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {addMessageActionCreator, DialogsDataType, MessagesDataType} from '../../Redux/dialog-reducer';
import Dialogs from "./Dialogs";

type DialogPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    dispatch: (value: any) => void
}

let DialogsContainer = (props: DialogPageType) => {

    let [dialogMessage, setDialogMessage] = useState('')

    const newMessageText = (event: ChangeEvent<HTMLInputElement>) => {
        let textMessage = event.currentTarget.value
        setDialogMessage(textMessage)
    }

    const addMessage = () => {
        // props.dispatch({type: 'ADD-NEW-MESSAGE', dialogMessage: dialogMessage})
        let action = addMessageActionCreator(dialogMessage)
        props.dispatch(action)
        setDialogMessage('')
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.ctrlKey && event.code === 'Enter') {
            addMessage()
        }
    }

    return (
        <Dialogs
            dialogMessage={dialogMessage}
            onKeyPressHandler={onKeyPressHandler}
            addMessage={addMessage}
            newMessageText={newMessageText}
            dialogsData={props.dialogsData}
            messagesData={props.messagesData}
        />
    )
}

export default DialogsContainer;