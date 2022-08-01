import React from "react";
import c from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/UserImg.png";

const ProfileInfo = (props: any) => {

    if(!props.profile) {
        return <Preloader />
    }

    return(
        <div>
            <div className={c.descriptionProfile}>
                <div>
                    <img className={c.avatar}
                         src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto }/>
                </div>
                <div className={c.profileInfo}>
                    <div className={c.description}>
                        <h2>{`${props.profile.fullName}`}</h2>
                        <h5>aboutMe: {props.profile.aboutMe !== null ? `${props.profile.aboutMe}` : '-'} </h5>

                        <h5>looking for a job:
                            {props.profile.lookingForAJob ? `${props.profile.lookingForAJob}`: '-'} </h5>

                        <h5>looking for a job description: {props.profile.lookingForAJobDescription !== null ? `${props.profile.lookingForAJobDescription}` : '-'}</h5>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;