import { FC } from 'react'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../../Redux/redux-store'
import { connect } from 'react-redux'

type MapStateToPropsType = {
  isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
})

export function withAuthRedirect<T>(Component: FC<T>) {
  function RedirectComponent(props: MapStateToPropsType) {
    const { isAuth, ...restProps } = props
    if (!props.isAuth) return <Redirect to={'/Login'} />
    return <Component {...(restProps as T)} />
  }
  return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
