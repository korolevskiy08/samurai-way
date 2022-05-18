import React from "react";
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import MyPhotos from "./MyPhotos/MyPhotos";

const Profile = () => {
    return (
        <div className={c.content}>
            <div className={c.descriptionProfile}>
                <div>
                    <img className={c.avatar}
                         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1umBlF11LZSZ9_cDQD5FCmRIqtsYwxCBZpqLYvteGTDhbop30lQ2X_A9RihJ0ci4q0KQ&usqp=CAU'/>
                </div>
                <div className={c.profileInfo}>
                    <div>
                        name
                    </div>
                    <div className={c.description}>
                        <h5>Date of Birth: </h5>
                        <h5>City: </h5>
                        <h5>Education: </h5>
                        <h5>Web site: </h5>
                    </div>
                </div>
            </div>

            <div className={c.space}></div>
            <MyPhotos/>
            <div className={c.space}></div>
            <MyPosts/>
            <Post/>

        </div>
    )
}

export default Profile;
