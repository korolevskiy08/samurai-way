import React, { FC } from 'react'
import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../Redux/redux-store'
import { getProfileThunkCreator, ProfileType } from '../../Redux/profile-reducer'
import Profile from './Profile'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../command/customHocRedirect/WithAuthRedirect'
import { compose } from 'redux'

export type MapStateToPropsProfileContainerType = {
  profile: ProfileType
}

type MapDispatchToPropsType = {
  getProfile: (userId: number) => void
}

export type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsProfileContainerType

export class ProfileContainer extends React.Component<any, any> {
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
    },
  }
}

export const ProfileComponent = compose<FC>(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileContainer)
