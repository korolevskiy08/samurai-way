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

let initialState = {
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

export type DialogsActionType = ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof setNewMessageTextAC>

export const dialogReducer = (state = initialState, action: DialogsActionType): DialogPageType => {
    switch (action.type) {
        case 'ADD_NEW_MESSAGE':
            let newMessage = {
                id: 1,
                message: state.newMessageText
            }
            return {
                ...state,
                dialogsData: [...state.dialogsData],
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }
            break;
        case 'SET-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.newMessageText
            }
    }
    return state
}

export const addMessageActionCreator = () => {
    return {
        type: 'ADD_NEW_MESSAGE'
    } as const
}
export const setNewMessageTextAC = (textMessage: string) => {
    return {
        type: 'SET-NEW-MESSAGE-TEXT', newMessageText: textMessage
    } as const
}

export default dialogReducer