import React from "react";
import c from "./ProfileInfo.module.css";


const ProfileInfo = (props: any) => {
    return(
        <div>
            <div className={c.descriptionProfile}>
                <div>
                    <img className={c.avatar}
                         src={props.profile.photos.large}/>
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

        </div>
    )
}

export default ProfileInfo;