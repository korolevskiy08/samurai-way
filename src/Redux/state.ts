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
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => void
    addNewMessage:(dialogMessage: string) => void
    addPost:(postMessage: string) => void
    subscribe:(callback: () => void) => void
} // типизация всего стора

export let store:StoreType = {
    _state: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(callback: () => void){
        this._callSubscriber = callback
    },
    addNewMessage(dialogMessage: string){
        let newMessage = {
            id: 1,
            message: dialogMessage
        }
        this._state.dialogPage.messagesData.push(newMessage)
        this._callSubscriber()
        console.log(dialogMessage)
    },
    addPost(postMessage: string){
        let newPost = {
            id: state.profilePage.postData.length + 1,
            message: postMessage,
            like: 0
        }
        this._state.profilePage.postData.push(newPost)
        this._callSubscriber()
    },
}