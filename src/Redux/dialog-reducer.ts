import {AddMessageFormType} from "../components/Dialogs/Message/addMessage/AddMessage";

export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type DialogPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

let initialState = {
    dialogsData: [
        {id: 1, name: 'Marusia'},
        {id: 2, name: 'Pablo'},
        {id: 3, name: 'Alex'},
    ],
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'By'},
    ],
}

export type DialogsActionType =
    | ReturnType<typeof addMessageActionCreator>

export const dialogReducer = (state = initialState, action: DialogsActionType): DialogPageType => {
    switch (action.type) {
        case 'ADD_NEW_MESSAGE':
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 1, message: action.textMessage.newMessageBody}],
            }
        default:
            return state
    }
}

export const addMessageActionCreator = (textMessage: AddMessageFormType) => {
    return {
        type: 'ADD_NEW_MESSAGE',
        textMessage
    } as const
}


export default dialogReducer
