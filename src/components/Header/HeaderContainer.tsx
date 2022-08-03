import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setUserDataAC } from "../../Redux/auth-reducer";
import { RootState } from "../../Redux/redux-store";
import Header from "./Header";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setUserData: (userId: any, email: any, login: any) => void
}

export type HeaderComponentType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderComponentType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data
                this.props.setUserData(id, email, login)
            }
        })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }

}

const mapStateToProps = (state: RootState):MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUserData: (userId: any, email: any, login: any) => {
            dispatch(setUserDataAC(userId, email, login))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);