import React from 'react';

const Header = (props) => {

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <div className="container">
                        <h1 className="title title-header">
                            Last.FM Profiles
                        </h1>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Header;