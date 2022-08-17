import React from "react";
import {connect} from "react-redux";
import {AppDispatch, ReduxStoreType, RootState} from "../../Redux/redux-store";
import {getProfileThunkCreator, ProfileType} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../command/customHocRedirect/WithAuthRedirect";

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    getProfile: (userId: number) => void
}

export type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType

export class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {

        let userId = this.props.match.params.userId

        this.props.getProfile(Number(userId))

    }

    render() {

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
    }
}

let mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        getProfile: (userId: number) => {
            dispatch(getProfileThunkCreator(userId))
        }
    }
}

export const ProfileComponent = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer)))
