import React, {FC} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {logout} from '../../Redux/auth-reducer'
import {AppDispatch, RootState} from '../../Redux/redux-store'
import Header from './Header'

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    logOut: () => void
}

export type HeaderComponentType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderComponentType> {

    render() {
        return <Header logOut={this.props.logOut} login={this.props.login} isAuth={this.props.isAuth}/>
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
        logOut: () => {
            dispatch(logout())
        }
    }
}

export default compose<FC>(connect(mapStateToProps, mapDispatchToProps))(HeaderContainer)
