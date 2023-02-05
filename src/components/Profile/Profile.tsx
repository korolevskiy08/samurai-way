import React, {FC} from 'react'
import c from './Profile.module.css'
import Post from './MyPosts/Post/Post'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsComponent from './MyPosts/MyPostsContainer'

type ProfileType = {
    profile: any;
    status: string;
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
}

const Profile: FC<ProfileType> = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  return (
    <div>
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} savePhoto={savePhoto} />
      <div className={c.space}></div>
      <MyPostsComponent />
      <Post />
    </div>
  )
}

export default React.memo(Profile)
