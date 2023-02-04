import React from 'react'
import c from './Profile.module.css'
import Post from './MyPosts/Post/Post'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsComponent from './MyPosts/MyPostsContainer'

const Profile = ({ profile, status, updateStatus }: any) => {
    console.log('Render profile')
  return (
    <div>
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
      <div className={c.space}></div>
      <MyPostsComponent />
      <Post />
    </div>
  )
}

export default React.memo(Profile)
