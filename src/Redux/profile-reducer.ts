import { AppThunk } from './redux-store'
import { profileAPI, userAPI } from '../api/api'
export type PostDataType = {
  id: number
  message: string
  like: number
}
type PhotosType = {
  large: string
  small: string
}
type ContactsType = {
  facebook: string | null
  github: string | null
  instagram: string | null
  mainLink: string | null
  twitter: string | null
  vk: string | null
  website: string | null
  youtube: string | null
}
export type ProfileType = {
  aboutMe: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
  userId: number
}
export type ProfilePageType = {
  postData: Array<PostDataType>
  newPostText: string
  profile: ProfileType | null
  status: string
}
let initialState: ProfilePageType = {
  postData: [
    {
      id: 1,
      message: 'Hi, how are you?',
      like: 6,
    },
  ],
  newPostText: '',
  profile: null,
  status: '',
}

export type ProfileActionType =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof setNewPostTextAC>
  | ReturnType<typeof setUserProfileAC>
  | ReturnType<typeof setStatusAC>

const profileReducer = (state = initialState, action: ProfileActionType): ProfilePageType => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: 0,
            message: state.newPostText,
            like: 0,
          },
        ],
        newPostText: '',
      }
    case 'NEW-POST-TEXT':
      return {
        ...state,
        newPostText: action.newPostText,
      }
    case 'SET-USER-PROFILE':
      return {
        ...state,
        profile: action.profile,
      }
    case 'SET-STATUS':
      return {
        ...state,
        status: action.status,
      }
    default:
      return state
  }
}

export const addPostActionCreator = () => {
  return {
    type: 'ADD_POST',
  } as const
}
export const setNewPostTextAC = (text: string) => {
  return {
    type: 'NEW-POST-TEXT',
    newPostText: text,
  } as const
}
export const setUserProfileAC = (profile: any) => {
  return {
    type: 'SET-USER-PROFILE',
    profile,
  } as const
}

export const setStatusAC = (status: string) => {
  return {
    type: 'SET-STATUS',
    status,
  } as const
}

export const getStatusThunkCreator = (userId: number): AppThunk => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatusAC(response.data))
    })
  }
}

export const updateStatusThunkCreator = (status: string): AppThunk => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) dispatch(setStatusAC(status))
    })
  }
}

export const getProfileThunkCreator = (userId: number): AppThunk => {
  return (dispatch) => {
    if (!userId) {
      userId = 2
    }
    profileAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfileAC(response.data))
    })
  }
}

export default profileReducer
