import React, {ChangeEvent} from 'react';
import {addMessageActionCreator} from '../../Redux/dialog-reducer';
import {RootState} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {setNewPostTextAC} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "../Profile/MyPosts/MyPosts";

// let DialogsContainer = () => {
//     return (
//         <div>
//
//             <StoreContext.Consumer>
//                 {
//                     (store) => {
//
//                         const newMessageText = (event: ChangeEvent<HTMLInputElement>) => {
//                             let textMessage = event.currentTarget.value
//                             setDialogMessage(textMessage)
//                         }
//
//                         const addMessage = () => {
//                             // props.dispatch({type: 'ADD-NEW-MESSAGE', dialogMessage: dialogMessage})
//                             let action = addMessageActionCreator(dialogMessage)
//                             store.dispatch(action)
//                             setDialogMessage('')
//                         }
//
//                         const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
//                             if (event.ctrlKey && event.code === 'Enter') {
//                                 addMessage()
//                             }
//                         }
//
//                         return (
//                             <Dialogs
//                                 dialogMessage={dialogMessage}
//                                 onKeyPressHandler={onKeyPressHandler}
//                                 addMessage={addMessage}
//                                 newMessageText={newMessageText}
//                                 dialogsData={store.getState().dialogPage.dialogsData}
//                                 messagesData={store.getState().dialogPage.messagesData}
//                             />
//                         )
//                     }
//                 }
//             </StoreContext.Consumer>
//         </div>
//     )
// }

let mapStateToProps = (state: RootState) => { // отвечает за пропсы значений
    return {
        dialogsData: state.dialogPage.dialogsData,
        messagesData: state.dialogPage.messagesData,
        value: state.dialogPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => { // отвечает за коллбэки

    return {
        addMessage() {
            dispatch(addMessageActionCreator())
        },
        newMessageText(event: ChangeEvent<HTMLInputElement>) {
            dispatch(setNewPostTextAC(event.currentTarget.value))
        }
    }
}
const MyDialogComponent = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyDialogComponent