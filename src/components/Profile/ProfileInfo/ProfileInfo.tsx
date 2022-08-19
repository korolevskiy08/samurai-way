import React from 'react'
import c from './ProfileInfo.module.css'
import { Preloader } from '../../common/Preloader/Preloader'
import userPhoto from '../../../assets/UserImg.png'
import { ProfileType } from '../../../Redux/profile-reducer'
import { ProfileInfoDescription } from './ProfileInfoDescription/ProfileInfoDescription'

type ProfileInfoType = {
  profile: ProfileType
}

const ProfileInfo = ({ profile }: ProfileInfoType) => {
  console.log(profile)
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={c.descriptionProfile}>
        <div>
          <img
            alt="avatar"
            className={c.avatar}
            src={profile.photos.large !== null ? profile.photos.large : userPhoto}
          />
        </div>
        <div className={c.profileInfo}>
          <div className={c.description}>
            <h2>{`${profile.fullName}`}</h2>
            <h5>aboutMe: {profile.aboutMe !== null ? ` ${profile.aboutMe}` : '-'} </h5>
            <ProfileInfoDescription />
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
      </div>
    </div>
  )
}

export default ProfileInfo
