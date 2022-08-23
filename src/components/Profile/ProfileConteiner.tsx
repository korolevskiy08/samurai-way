import React, { FC } from 'react'
import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../Redux/redux-store'
import {
  getProfileThunkCreator,
  getStatusThunkCreator,
  ProfileType,
  updateStatusThunkCreator,
} from '../../Redux/profile-reducer'
import Profile from './Profile'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../command/customHocRedirect/WithAuthRedirect'
import { compose } from 'redux'

export type MapStateToPropsProfileContainerType = {
  profile: ProfileType
  status: string
}

type MapDispatchToPropsType = {
  getProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
}

export type ProfilePropsType = MapDispatchToPropsType &
  MapStateToPropsProfileContainerType &
  RouteComponentProps<{ userId: string }>

export class ProfileContainer extends React.Component<ProfilePropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    this.props.getProfile(Number(userId))

    this.props.getStatus(Number(userId))
  }

  render() {
    return (
      <div>
        <Profile
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
  }
}

export const ProfileComponent = compose<FC>(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileContainer)
