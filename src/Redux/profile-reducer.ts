import {AppThunk} from './redux-store'
import {profileAPI} from '../api/api'
import {AddPostFormType} from "../components/Profile/MyPosts/AddPost/AddPost";

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
    profile: null,
    status: '',
}

export type ProfileActionType =
    | ReturnType<typeof addPostActionCreator>
    // | ReturnType<typeof setNewPostTextAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof deletePost>

const profileReducer = (state = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                postData: [
                    ...state.postData,
                    {
                        id: 0,
                        message: action.textMessage,
                        like: 0,
                    },
                ],
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
        case 'DELETE-POST' :
            return {
                ...state,
                postData: state.postData.filter(el => el.id !== action.postId)
            }
        default:
            return state
    }
}

export const addPostActionCreator = (textMessage: string) => {
    return {
        type: 'ADD_POST',
        textMessage
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

export const deletePost = (postId: number) => {
    return {
        type: 'DELETE-POST',
        postId
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
