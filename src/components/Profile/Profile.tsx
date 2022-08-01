import React from "react";
import c from './Profile.module.css';
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsComponent from "./MyPosts/MyPosts.container";


const Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <div className={c.space}></div>
            {/*<MyPhotos/>*/}
            {/*<div className={c.space}></div>*/}
            <MyPostsComponent/>
            <Post/>
        </div>
    )
}

export default Profile;
