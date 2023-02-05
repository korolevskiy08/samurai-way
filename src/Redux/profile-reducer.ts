import {AppThunk} from './redux-store'
import {profileAPI} from '../api/api'
import {AddPostFormType} from "../components/Profile/MyPosts/AddPost/AddPost";
import axios from "axios";
import profile from "../components/Profile/Profile";

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
    photos: any
    userId: number
}

export type ProfilePageType = {
    postData: Array<PostDataType>
    profile: any
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
    | ReturnType<typeof savePhotoSuccess>

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
        case 'SAVE-PHOTO-SUCCESS' :
            return { ...state, profile: { ...state.profile, photos: action.photos }}
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

export const savePhotoSuccess = (photos: any) => {
    return {
        type: 'SAVE-PHOTO-SUCCESS',
        photos
    } as const
}

export const getStatusThunkCreator = (userId: number): AppThunk => async (dispatch) => {
    try {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatusAC(response.data))
    } catch (e) {
        if (axios.isAxiosError(e)) {
        }
    }
}

export const updateStatusThunkCreator = (status: string): AppThunk => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status)

        if (response.data.resultCode === 0) dispatch(setStatusAC(status))
    } catch (e) {
        if (axios.isAxiosError(e)) {
        }
    }
}

export const getProfileThunkCreator = (userId: number): AppThunk => async (dispatch) => {
    try {
        if (!userId) {
            userId = 2
        }
        const response = await profileAPI.getProfile(userId)
        dispatch(setUserProfileAC(response.data))
    } catch (e) {
        if (axios.isAxiosError(e)) {
        }
    }
}

export const saveProfilePhoto = (photos: any): AppThunk => async (dispatch) => {
    try {
        const response = await profileAPI.savePhoto(photos)

        if (response.data.resultCode === 0) dispatch(savePhotoSuccess(response.data.data.photos))
    } catch (e) {
        if (axios.isAxiosError(e)) {
        }
    }
}

export default profileReducer
