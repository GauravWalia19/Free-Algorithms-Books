import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="outerHeader">
            <div className="header">
                <a href="/">
                    <img src="./logo.png" alt="FreeAlgorithms Books logo" id="imageLogo"/>
                </a>
                <ul className="navLinkList">
                    <li className="navLinks"><a href="#secondPage">Library</a></li>
                    <li className="navLinks"><a href="#thirdPage">Community</a></li>
                    <li className="navLinks">v1.0.0</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
