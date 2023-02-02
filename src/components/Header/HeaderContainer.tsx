import axios from 'axios'
import React, { FC } from 'react'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import {logout, setUserDataThunkCreator} from '../../Redux/auth-reducer'
import { AppDispatch, RootState } from '../../Redux/redux-store'
import Header from './Header'

type MapStateToPropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchToPropsType = {
  setUserDataThunk: () => void
  logOut: () => void
}

export type HeaderComponentType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderComponentType> {
  componentDidMount() {
    this.props.setUserDataThunk()
  }

  render() {
    return <Header logOut={this.props.logOut} login={this.props.login} isAuth={this.props.isAuth} />
  }
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
  return {
    setUserDataThunk: () => {
      dispatch(setUserDataThunkCreator())
    },
    logOut: () => {
      dispatch(logout())
    }
  }
}

export default compose<FC>(connect(mapStateToProps, mapDispatchToProps))(HeaderContainer)
