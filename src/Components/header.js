import React from 'react';

const Header = (props) => {

    return (
        <nav className="navbar is-dark">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <div className="container">
                        <h1 className="title is-light">
                            Last.FM Profile
                            </h1>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Header;