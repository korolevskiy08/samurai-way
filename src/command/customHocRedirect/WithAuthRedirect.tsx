import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: MapStateToPropsType) {

        let {isAuth, ...restProps} = props

        if (!props.isAuth) return <Redirect to={'/Login'}/>
        return <Component {...restProps as T} />;

    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent

}
