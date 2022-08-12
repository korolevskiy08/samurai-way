import React from "react";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../Redux/redux-store";
import {getProfileThunkCreator, ProfileType} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {Redirect, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getProfile: (userId: number) => void
}

export type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType

export class ProfileContainer extends React.Component<any>{

    componentDidMount() {

        let userId = this.props.match.params.userId

        this.props.getProfile(Number(userId))

    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'login'} />
        return (
            <div>
                <Profile profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        getProfile: (userId: number) => {
            dispatch(getProfileThunkCreator(userId))
        }
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export const ProfileComponent = connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent)
