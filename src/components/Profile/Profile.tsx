import React from 'react'
import c from './Profile.module.css'
import Post from './MyPosts/Post/Post'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsComponent from './MyPosts/MyPostsContainer'
import { MapStateToPropsProfileContainerType } from './ProfileConteiner'

const Profile = ({ profile }: MapStateToPropsProfileContainerType) => {
  return (
    <div>
      <ProfileInfo profile={profile} />
      <div className={c.space}></div>
      <MyPostsComponent />
      <Post />
    </div>
  )
}

export default Profile
