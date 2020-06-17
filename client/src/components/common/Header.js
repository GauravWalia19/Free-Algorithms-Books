import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <React.Fragment>
            <div className="outerHeader">
                <div className="header">
                    <a href="/" className="homeLink">
                        <i className="fas fa-book"></i>
                        <span>Free Algorithm Books</span>
                    </a>
                    <ul className="navLinkList">
                        <li className="navLinks"><a href="/#secondPage">Library</a></li>
                        <li className="navLinks"><a href="/#thirdPage">Community</a></li>
                        <li className="navLinks">v1.0.0</li>
                    </ul>
                </div>
                <div className="forkOption">
                    <a href="https://github.com/GauravWalia19/Free-Algorithms-Books">
                        Fork on github
                    </a>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Header;
