import React, {ChangeEvent} from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Button} from "../common/Button/Button";
import {dialogsPropsType} from "./Dialogs.container";
import {Redirect} from "react-router-dom";


export let Dialogs = ({
                          dialogsData,
                          messagesData,
                          onChangeNewMessageText,
                          addMessage,
                          dialogMessage,
                      }: dialogsPropsType) => {
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