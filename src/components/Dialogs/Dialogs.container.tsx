import React, { FC } from 'react'
import {
  addMessageActionCreator,
  DialogsDataType,
  MessagesDataType,
} from '../../Redux/dialog-reducer'
import { RootState } from '../../Redux/redux-store'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import Dialogs from './Dialogs'
import { withAuthRedirect } from '../../command/customHocRedirect/WithAuthRedirect'
import {AddMessageFormType} from "./Message/addMessage/AddMessage";

type mapStateToPropsType = {
  dialogsData: Array<DialogsDataType>
  messagesData: Array<MessagesDataType>
}
type mapDispatchToPropsType = {
  addMessage: (textMessage: AddMessageFormType) => void
}
export type dialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootState): mapStateToPropsType => {
  // отвечает за пропсы значений
  return {
    dialogsData: state.dialogPage.dialogsData,
    messagesData: state.dialogPage.messagesData,
  }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  // отвечает за коллбэки
  return {
    addMessage(textMessage: AddMessageFormType) {
      dispatch(addMessageActionCreator(textMessage))
    },
  }
}

const MyDialogComponent = compose<FC>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

export default MyDialogComponent
