import {ActionsType} from "./redux-store";

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
    newMessageText: string
}
let initialState: DialogPageType = {
    dialogsData: [
        {id: 1, name: 'Marusia'},
        {id: 2, name: 'Pablo'},
        {id: 3, name: 'Alex'}
    ],
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'By'}
    ],
    newMessageText: ''
}

export const dialogReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD_NEW_MESSAGE':
            let newMessage = {
                id: 1,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            break;
        case 'SET-NEW-TEXT':
            state.newMessageText = action.newMessageText
    }
    return state
}

export const addMessageActionCreator = () => {
    return {
        type: 'ADD_NEW_MESSAGE'
    } as const
}

export const setNewMessageTextAC = (text: string) => {
    return {
        type: 'SET-NEW-TEXT', newMessageText: text
    } as const
}

export default dialogReducer