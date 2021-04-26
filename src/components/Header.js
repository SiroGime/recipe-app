import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header__container">
            <div className="header">
                <h1 className="title">Recipe App</h1>
                <nav className="menu__container">
                    <ul className="menu">
                        <li><Link to="/home" className="home_link">Home</Link></li>
                        <li>
                            <Link to="/favorites" className="favorites_link">
                                Favorites
                            </Link>
                        </li>  
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;
