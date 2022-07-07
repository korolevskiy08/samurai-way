import {ProfilePageType} from "./state";

export type addPostActionCreatorType = {
    type: 'ADD_POST',
    postMessage: string
}

const profileReducer = (state: ProfilePageType, action: any) => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                id: 0,
                message: action.postMessage,
                like: 0
            }
            state.postData.push(newPost)
            break;
    }
    return state
}

export const addPostActionCreator = (value: string) => {
    return {
        type: 'ADD_POST', postMessage: value
    } as const
}

export default profileReducer