import React from "react";
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import MyPhotos from "./MyPhotos/MyPhotos";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <div className={c.space}></div>
            <MyPhotos/>
            <div className={c.space}></div>
            <MyPosts/>
            <Post/>
        </div>
    )
}

export default Profile;
