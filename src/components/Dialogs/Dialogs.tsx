import React from 'react'
import c from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {dialogsPropsType} from './Dialogs.container'
import {AddMessageFormRedux, AddMessageFormType} from "./Message/addMessage/AddMessage";

export let Dialogs = ({
                          dialogsData,
                          messagesData,
                          addMessage,
                      }: dialogsPropsType) => {

    let dialogsElement = dialogsData.map((el, i) => <DialogItem key={i} name={el.name} id={el.id}/>)
    let messagesElement = messagesData.map((el, i) => (
        <Message key={i} text={el.message} id={el.id}/>
    ))

    const submitAddMessage = (textMessage: AddMessageFormType) => {
        addMessage(textMessage)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>{dialogsElement}</div>
            <div className={c.messages}>{messagesElement}</div>
            <AddMessageFormRedux onSubmit={submitAddMessage}/>
        </div>
    )
}

export default Dialogs
