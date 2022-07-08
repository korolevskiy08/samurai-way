import {ActionsType} from "./redux-store";

type PostDataType = {
    id: number
    message: string
    like: number
}
export type ProfilePageType = {
    postData: Array<PostDataType>
}

export type addPostActionCreatorType = {
    type: 'ADD_POST',
    postMessage: string
}

let initialState:ProfilePageType = {
        postData: [
            { id: 1, message: 'Hi, how are you?', like: 6 },
            { id: 2, message: 'My first post', like: 7 },
            { id: 3, message: 'Hello, my friend', like: 99 }
        ]
}

const profileReducer = (state = initialState, action:ActionsType) => {
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


