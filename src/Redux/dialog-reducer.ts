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
}
export type addMessageActionCreatorType =  {
    type: 'ADD_NEW_MESSAGE',
    dialogMessage: string
}
let initialState: DialogPageType = {
        dialogsData: [
            { id: 1, name: 'Marusia' },
            { id: 2, name: 'Pablo' },
            { id: 3, name: 'Alex' }
        ],
        messagesData: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'By' }
        ]
}
type dialogReducer = {
    state: DialogPageType,
    action: ActionsType
}

export const dialogReducer = (state = initialState, action:ActionsType) => {
    switch (action.type) {
        case 'ADD_NEW_MESSAGE':
            let newMessage = {
                id: 1,
                message: action.dialogMessage
            }
            state.messagesData.push(newMessage)
            break;
    }
    return state
}

export const addMessageActionCreator = (dialogMessage: string) => {
    return {
        type: 'ADD_NEW_MESSAGE', dialogMessage: dialogMessage
    } as const
}

export default dialogReducer