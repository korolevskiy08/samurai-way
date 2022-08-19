import profileReducer, { addPostActionCreator } from './profile-reducer'
import dialogReducer, { addMessageActionCreator } from './dialog-reducer'
import sideBarReducer from './sideBar-reducer'

type PostDataType = {
  id: number
  message: string
  like: number
}
type MessagesDataType = {
  id: number
  message: string
}

type DialogsDataType = {
  id: number
  name: string
}
export type ProfilePageType = {
  postData: Array<PostDataType>
}

export type DialogPageType = {
  dialogsData: Array<DialogsDataType>
  messagesData: Array<MessagesDataType>
}
type FriendsType = {
  id: number
  name: string
  status: string
}
export type SideBarType = {
  friends: Array<FriendsType>
}
export type RootStateType = {
  profilePage: ProfilePageType
  dialogPage: DialogPageType
  sideBar: SideBarType
}

export type StoreType = {
  _state: RootStateType
  _callSubscriber: () => void
  getState: () => void
  subscribe: (callback: () => void) => void
  dispatch: (action: ActionsType) => void
} // типизация всего стора
export type ActionsType =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof addMessageActionCreator>
// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             postData: [
//                 { id: 1, message: 'Hi, how are you?', like: 6 },
//                 { id: 2, message: 'My first post', like: 7 },
//                 { id: 3, message: 'Hello, my friend', like: 99 }
//             ]
//         },
//         dialogPage: {
//             dialogsData: [
//                 { id: 1, name: 'Marusia' },
//                 { id: 2, name: 'Pablo' },
//                 { id: 3, name: 'Alex' }
//             ],
//             messagesData: [
//                 { id: 1, message: 'Hello' },
//                 { id: 2, message: 'How are you?' },
//                 { id: 3, message: 'By' }
//             ]
//         },
//         sideBar: {
//             friends: [
//                 { id: 1, name: 'Marusia', status: 'online' },
//                 { id: 2, name: 'Pablo', status: 'offline' },
//                 { id: 3, name: 'Alex', status: 'offline' }
//             ]
//         }
//     },
//     getState() {
//         return this._state
//     },
//     _callSubscriber() {
//         console.log('state changed')
//     },
//     subscribe(callback: () => void) {
//         this._callSubscriber = callback
//     },
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
//         this._state.sideBar = sideBarReducer(this._state.sideBar, action)
//
//        this._callSubscriber()
//     }
// }
