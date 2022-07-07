import {DialogPageType} from "./state";

export type addMessageActionCreatorType =  {
    type: 'ADD_NEW_MESSAGE',
    dialogMessage: string
}

const dialogReducer = (state: DialogPageType, action: any) => {
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