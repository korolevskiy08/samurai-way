import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {setUserDataThunkCreator} from "../../Redux/auth-reducer";
import {AppDispatch, RootState} from "../../Redux/redux-store";
import Header from "./Header";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setUserDataThunk: () => void
}

export type HeaderComponentType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderComponentType> {
    componentDidMount() {
        this.props.setUserDataThunk()
    }

    render() {
        return (
            <Header login={this.props.login}
                    isAuth={this.props.isAuth} />
        )
    }

}

const mapStateToProps = (state: RootState):MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        setUserDataThunk: () => {
            dispatch(setUserDataThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);