import React from "react";
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import MyPhotos from "./MyPhotos/MyPhotos";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PostDataType = {
    id: number
    message: string
    like: number
}

type ProfilePageType = {
    postData: Array<PostDataType>
}

const Profile = (props: ProfilePageType) => {

    return (
        <div>
            <ProfileInfo/>
            <div className={c.space}></div>
            <MyPhotos/>
            <div className={c.space}></div>
            <MyPosts postData={props.postData}/>
            <Post/>
        </div>
    )
}

export default Profile;
