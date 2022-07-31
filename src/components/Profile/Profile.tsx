import React from "react";
import c from './Profile.module.css';
import Post from "./MyPosts/Post/Post";
import MyPhotos from "./MyPhotos/MyPhotos";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsComponent from "./MyPosts/MyPosts.container";
import {Preloader} from "../common/Preloader/Preloader";

const Profile = (props:any) => {

    if(!props.profile) {
        return <Preloader />
    }

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
