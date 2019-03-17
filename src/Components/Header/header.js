import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <div className="container">
                        <Link to="/">
                            <h1 className="title title-header">
                                Last.FM Profiles
                        </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Header;