import React from "react";
import c from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const renderIsActive = ((navData: any) => navData.isActive ? c.active : c.item)


const Navbar = (props: any) => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to='/Profile' className={renderIsActive}> Profile </NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/Dialogs' className={renderIsActive}> Messages </NavLink>
            </div>
            <div className={`${c.item}`}>
                <NavLink to='/News' className={renderIsActive}> News </NavLink>
            </div>
            <div className={`${c.item}`}>
                <NavLink to='/Music' className={renderIsActive}> Music </NavLink>
            </div>
            <div className = {`${c.item}`}>
                <NavLink to='/Setting' className={ renderIsActive }> Setting </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;