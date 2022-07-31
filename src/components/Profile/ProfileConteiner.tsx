import React from "react";

import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {setUserProfileAC} from "../../Redux/profile-reducer";
import {Dispatch} from "redux";
import Profile from "./Profile";

type MapStateToPropsType = {
    profile: any
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}

export type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType

export class ProfileContainer extends React.Component<any>{

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {

            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUserProfile: (profile: any) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}

export const ProfileComponent = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
