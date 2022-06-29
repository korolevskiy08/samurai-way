
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
export type addPostActionCreatorType = {
    type: 'ADD_POST',
    postMessage: string
}
export type addMessageActionCreatorType =  {
    type: 'ADD_NEW_MESSAGE',
    dialogMessage: string
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: addPostActionCreatorType | addMessageActionCreatorType) => void
} // типизация всего стора

export let store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hi, how are you?', like: 6 },
                { id: 2, message: 'My first post', like: 7 },
                { id: 3, message: 'Hello, my friend', like: 99 }
            ]
        },
        dialogPage: {
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
        },
        sideBar: {
            friends: [
                { id: 1, name: 'Marusia', status: 'online' },
                { id: 2, name: 'Pablo', status: 'offline' },
                { id: 3, name: 'Alex', status: 'offline' }
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(callback: () => void) {
        this._callSubscriber = callback
    },
    // addNewMessage(dialogMessage: string){
    //     let newMessage = {
    //         id: 1,
    //         message: dialogMessage
    //     }
    //     this._state.dialogPage.messagesData.push(newMessage)
    //     this._callSubscriber()
    //     console.log(dialogMessage)
    // },
    // addPost(postMessage: string){
    //     let newPost = {
    //         id: 0,
    //         message: postMessage,
    //         like: 0
    //     }
    //     this._state.profilePage.postData.push(newPost)
    //     this._callSubscriber()
    // },
    dispatch(action) {
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 0,
                message: action.postMessage,
                like: 0
            }
            
            this._state.profilePage.postData.push(newPost)
            this._callSubscriber()
            console.log(newPost)
        }
        if (action.type === 'ADD_NEW_MESSAGE') {
            let newMessage = {
                id: 1,
                message: action.dialogMessage
            }
            this._state.dialogPage.messagesData.push(newMessage)
            this._callSubscriber()
        }
    }
}
export const addPostActionCreator = (value: string) => {
    return {
        type: 'ADD_POST', postMessage: value 
    }
}

export const addMessageActionCreator = (dialogMessage: string) => {
    return {type: 'ADD_NEW_MESSAGE', dialogMessage: dialogMessage}
}

