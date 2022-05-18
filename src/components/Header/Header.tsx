import React from "react";
import c from './Header.module.css';

const Header = () => {
    return (
            <header className={c.header}>
                <img alt ='' src='https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png' />
            </header>
    )
}

export default Header;