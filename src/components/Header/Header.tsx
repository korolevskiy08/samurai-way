import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './Header.module.css'

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
}

const Header = ({ isAuth, login }: HeaderPropsType) => {
  return (
    <header className={c.header}>
      <img
        alt=""
        src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
      />

      <div className={c.loginBlock}>{isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}</div>
    </header>
  )
}

export default Header
