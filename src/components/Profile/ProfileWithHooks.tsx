import React, {FC} from 'react'
import c from './Profile.module.css'
import Post from './MyPosts/Post/Post'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsComponent from './MyPosts/MyPostsContainer'
import {ProfileType} from "../../Redux/profile-reducer";

type ProfileWithHooks = {
    profile: ProfileType;
    status: string;
    updateStatus: (status: string) => void
}

const ProfileWithHooks: FC <ProfileWithHooks>  = ({profile, status, updateStatus}) => {
  return (
    <div>
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
      <div className={c.space}></div>
      <MyPostsComponent />
      <Post />
    </div>
  )
}

export default ProfileWithHooks
