import profile from "../components/Profile/Profile";
type PostDataType = {
    id: number
    message: string
    like: number
}

type DialogsDataType = {
    id: number
    name: string
}

type MessagesDataType = {
    id: number
    message: string
}

type ProfilePageType = {
    postData: Array<PostDataType>
}

type DialogPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

type FriendsType = {
    id: number
    name: string
    status: string
}

type SideBarType = {
    friends: Array<FriendsType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sideBar: SideBarType
}

let rerenderEntireTree = () => {
console.log('state changed')
}

export let state: RootStateType = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', like: 6},
            {id: 2, message: 'My first post', like: 7},
            {id: 3, message: 'Hello, my friend', like: 99}
        ]
    },
    dialogPage: {
        dialogsData: [
            {id: 1, name: 'Marusia'},
            {id: 2, name: 'Pablo'},
            {id: 3, name: 'Alex'}
        ],
        messagesData: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'By'}
        ]
    },
    sideBar: {
        friends: [
            {id: 1, name: 'Marusia', status: 'online'},
            {id: 2, name: 'Pablo', status: 'offline'},
            {id: 3, name: 'Alex', status: 'offline'}
        ]
    }
}

export let addPost = (postMessage: string) => {
    let newPost = {
        id: state.profilePage.postData.length + 1,
        message: postMessage,
        like: 0
    }
    state.profilePage.postData.push(newPost)
    rerenderEntireTree()
}

export let addNewMessage = (dialogMessage: string) => {
    let newMessage = {
        id: 1,
        message: dialogMessage
    }
    state.dialogPage.messagesData.push(newMessage)
    rerenderEntireTree()
    console.log(dialogMessage)
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}
