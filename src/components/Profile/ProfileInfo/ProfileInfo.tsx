import React from "react";
import c from "./ProfileInfo.module.css";


const ProfileInfo = (props: any) => {
    return(
        <div>
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

        </div>
    )
}

export default ProfileInfo;