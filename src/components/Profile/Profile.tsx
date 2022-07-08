import React from "react";
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import MyPhotos from "./MyPhotos/MyPhotos";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostActionCreatorType} from "../../Redux/profile-reducer";
import MyPostsComponent from "./MyPosts/MyPosts.container";


type PostDataType = {
    id: number
    message: string
    like: number

}
type ProfilePageType = {
    postData: Array<PostDataType>
    dispatch: (action: addPostActionCreatorType) => void
}

const Profile = (props: ProfilePageType) => {

    return (
        <div>
            <ProfileInfo/>
            <div className={c.space}></div>
            <MyPhotos/>
            <div className={c.space}></div>
            <MyPostsComponent postData={props.postData}
             dispatch={props.dispatch}/>
            <Post/>
        </div>
    )
}

export default Profile;
