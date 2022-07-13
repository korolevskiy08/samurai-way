import {ActionsType} from "./redux-store";

export type PostDataType = {
    id: number
    message: string
    like: number
}

export type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}

let initialState:ProfilePageType = {
        postData: [
            { id: 1, message: 'Hi, how are you?', like: 6 },
            { id: 2, message: 'My first post', like: 7 },
            { id: 3, message: 'Hello, my friend', like: 99 }
        ],
    newPostText: ''
}

const profileReducer = (state = initialState, action:ActionsType) => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                id: 0,
                message: state.newPostText,
                like: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            break;
        case "NEW-POST-TEXT":
            state.newPostText = action.newPostText
    }
    return state
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD_POST'
    } as const
}

export const setNewPostTextAC = (text: string) => {
    return {
        type: 'NEW-POST-TEXT', newPostText: text
    } as const
}

export default profileReducer


