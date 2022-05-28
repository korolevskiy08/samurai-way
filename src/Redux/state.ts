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
    dialogsData:Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}

export let state:RootStateType = {
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
}