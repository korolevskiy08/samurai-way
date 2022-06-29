import React from "react";
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import MyPhotos from "./MyPhotos/MyPhotos";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { addMessageActionCreatorType, addPostActionCreatorType } from "../../Redux/state";

type PostDataType = {
    id: number
    message: string
    like: number

}
type ProfilePageType = {
    postData: Array<PostDataType>
    dispatch: (action: addPostActionCreatorType | addMessageActionCreatorType) => void
}

const Profile = (props: ProfilePageType) => {

    return (
        <div>
            <ProfileInfo/>
            <div className={c.space}></div>
            <MyPhotos/>
            <div className={c.space}></div>
            <MyPosts postData={props.postData}
             dispatch={props.dispatch}/>
            <Post/>
        </div>
    )
}

export default Profile;
