import React, {FC} from 'react'
import {connect} from 'react-redux'
import {AppDispatch, RootState} from '../../Redux/redux-store'
import {
    getProfileThunkCreator,
    getStatusThunkCreator,
    ProfileType, saveDataProfile, saveProfilePhoto,
    updateStatusThunkCreator,
} from '../../Redux/profile-reducer'
import Profile from './Profile'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../../command/customHocRedirect/WithAuthRedirect'
import {compose} from 'redux'

export type MapStateToPropsProfileContainerType = {
    profile: ProfileType;
    status: string;
    authorizedUserId: string;
    isAuth: boolean;
}

type MapDispatchToPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (photo: any) => void
    saveData: (data: any) => void
}

export type ProfilePropsType = MapDispatchToPropsType &
    MapStateToPropsProfileContainerType &
    RouteComponentProps<{ userId: string }>

export class ProfileContainer extends React.Component<ProfilePropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getProfile(Number(userId))

        this.props.getStatus(Number(userId))
    }

    componentDidMount() {

        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile
                    saveData={this.props.saveData}
                    savePhoto={this.props.savePhoto}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        getProfile: (userId: number) => {
            dispatch(getProfileThunkCreator(userId))
        },
        getStatus: (userId: number) => {
            dispatch(getStatusThunkCreator(userId))
        },
        updateStatus: (status: string) => {
            dispatch(updateStatusThunkCreator(status))
        },
        savePhoto: (photo: any) => {
            dispatch((saveProfilePhoto(photo)))
        },
        saveData: (data: any) => {
            dispatch(saveDataProfile(data))
        }
    }
}

const ProfileComponent = compose<FC>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer)

export default ProfileComponent
