import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {addMessageActionCreator, DialogsDataType, MessagesDataType} from '../../Redux/dialog-reducer';
import Dialogs from "./Dialogs";
import StoreContext from "../../store.context";

let DialogsContainer = () => {
    let [dialogMessage, setDialogMessage] = useState('')
    return (
        <div>

            <StoreContext.Consumer>
                {
                (store) => {



                    const newMessageText = (event: ChangeEvent<HTMLInputElement>) => {
                        let textMessage = event.currentTarget.value
                        setDialogMessage(textMessage)
                    }

                    const addMessage = () => {
                        // props.dispatch({type: 'ADD-NEW-MESSAGE', dialogMessage: dialogMessage})
                        let action = addMessageActionCreator(dialogMessage)
                        store.dispatch(action)
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
                            dialogsData={store.getState().dialogPage.dialogsData}
                            messagesData={store.getState().dialogPage.messagesData}
                        />
                    )
                }
            }
            </StoreContext.Consumer>
        </div>
    )
}

export default DialogsContainer