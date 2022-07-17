import React, {ChangeEvent} from 'react';
import {addMessageActionCreator, DialogsDataType, MessagesDataType, setNewMessageTextAC} from '../../Redux/dialog-reducer';
import {RootState} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

type mapStateToPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    dialogMessage: string
}

type mapDispatchToPropsType = {
    addMessage: () => void
    onChangeNewMessageText: (event: ChangeEvent<HTMLInputElement>) => void
}

export type dialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootState):mapStateToPropsType => { // отвечает за пропсы значений
    return {
        dialogsData: state.dialogPage.dialogsData,
        messagesData: state.dialogPage.messagesData,
        dialogMessage: state.dialogPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => { // отвечает за коллбэки

    return {
        addMessage() {
            dispatch(addMessageActionCreator())
        },
        onChangeNewMessageText(event: ChangeEvent<HTMLInputElement>) {
            dispatch(setNewMessageTextAC(event.currentTarget.value))
        }
    }
}
const MyDialogComponent = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default MyDialogComponent