import React, {ChangeEvent} from 'react'
import c from './ProfileInfo.module.css'
import { Preloader } from '../../common/Preloader/Preloader'
import userPhoto from '../../../assets/UserImg.png'
import { ProfileType } from '../../../Redux/profile-reducer'
import { ProfileStatus } from './ProfileStatus/ProfileStatus'
import {Contacts} from "../Contacts/Contacts";

type ProfileInfoType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: any
}

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }: ProfileInfoType) => {
  if (!profile) {
    return <Preloader />
  }

  const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      savePhoto(e.target.files[0])
    }
  }

  return (
      <div className={c.descriptionProfile}>
        <div className={c.avatarBlock}>
          <img
            alt="avatar"
            className={c.avatar}
            src={profile.photos.large !== null ? profile.photos.large : userPhoto}
          />
          {isOwner && <input className={c.addImage} type="file" onChange={mainPhotoSelected} />}
        </div>
        <div className={c.profileInfo}>
          <div className={c.description}>
            <h2>{`${profile.fullName}`}</h2>
            <ProfileStatus status={status} updateStatus={updateStatus} />
            <h5>aboutMe: {profile.aboutMe !== null ? ` ${profile.aboutMe}` : '-'} </h5>
            <h5>
              looking for a job:
              {profile.lookingForAJob ? ` ${profile.lookingForAJob}` : '-'}
            </h5>
            <h5>
              looking for a job description:
              {profile.lookingForAJobDescription !== null
                ? ` ${profile.lookingForAJobDescription}`
                : '-'}
            </h5>
          </div>
        </div>
        <div className={c.contacts}>
          {Object.keys(profile.contacts).map(key => {
            {Object.values(profile.contacts).map(el => <Contacts contactValue={el} />)}
            return <Contacts key={key} contactName={key} />
          })}
        </div>
      </div>
  )
}

export default ProfileInfo
