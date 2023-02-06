import React, {FC} from 'react';
import c from "../ProfileInfo/ProfileInfo.module.css";
import {ProfileStatus} from "../ProfileInfo/ProfileStatus/ProfileStatus";

type ProfileDataType = {
    fullName: string;
    aboutMe: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    updateStatus: (status: string) => void;
    status: string;
}

export const ProfileData: FC<ProfileDataType> = (props) => {
    const {fullName, lookingForAJob, lookingForAJobDescription, aboutMe, updateStatus, status} = props

    return (
        <div>
            <div className={c.profileInfo}>
                <div className={c.description}>
                    <h2>{`${fullName}`}</h2>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                    <h5>aboutMe: {aboutMe !== null ? ` ${aboutMe}` : '-'} </h5>
                    <h5>
                        looking for a job:
                        {lookingForAJob ? ` ${lookingForAJob}` : '-'}
                    </h5>
                    <h5>
                        looking for a job
                        description: {lookingForAJobDescription !== null ? ` ${lookingForAJobDescription}` : '-'}
                    </h5>
                </div>
            </div>
        </div>
    );
};
