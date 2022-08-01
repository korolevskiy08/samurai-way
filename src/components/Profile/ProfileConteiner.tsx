import React from "react";

import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {ProfileType, setUserProfileAC} from "../../Redux/profile-reducer";
import {Dispatch} from "redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

export type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType

export class ProfileContainer extends React.Component<any>{

    componentDidMount() {
        let userId = this.props.match.params.userId

        if(!userId){
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
            console.log(response.data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
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

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export const ProfileComponent = connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent)
