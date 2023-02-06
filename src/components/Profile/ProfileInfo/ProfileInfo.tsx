import React, {ChangeEvent, useState} from 'react'
import c from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader'
import userPhoto from '../../../assets/UserImg.png'
import {ProfileType} from '../../../Redux/profile-reducer'
import {ProfileStatus} from './ProfileStatus/ProfileStatus'
import {Contacts} from "../Contacts/Contacts";
import {ProfileData} from "../ProfileData/ProfileData";
import ProfileDataFormRedux, {FormEditProfileType, ProfileDataForm} from "../ProfileDataForm/ProfileDataForm";

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
    saveData: any
}

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveData}: ProfileInfoType) => {
    const [editMode, setEditMode] = useState(false)

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: FormEditProfileType) => {
        saveData(formData)
        setEditMode(false)
    }

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={c.descriptionProfile}>
            <div className={c.avatarBlock}>
                <img
                    alt="avatar"
                    className={c.avatar}
                    src={profile.photos !== null ? profile.photos : userPhoto}
                />
                {isOwner && <div>
                    <input className={c.addImage} type="file" onChange={mainPhotoSelected}/>
                    <button onClick={() => setEditMode(true)}>Edit Profile</button>
                </div>
                }
            </div>

            {editMode
                ? <ProfileDataFormRedux initialValues={profile} onSubmit={onSubmit} />
                : <ProfileData status={status}
                               fullName={profile.fullName}
                               aboutMe={profile.aboutMe}
                               lookingForAJob={profile.lookingForAJob}
                               lookingForAJobDescription={profile.lookingForAJobDescription}
                               updateStatus={updateStatus}
                />
            }

            <div className={c.contacts}>
                {Object.keys(profile.contacts).map(key => {
                    {
                        Object.values(profile.contacts).map(el => <Contacts contactValue={el}/>)
                    }
                    return <Contacts key={key} contactName={key}/>
                })}
            </div>
        </div>
    )
}

export default ProfileInfo
