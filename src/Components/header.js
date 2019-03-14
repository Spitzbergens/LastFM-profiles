import React from 'react';

class Header extends React.Component {

    render() {
        return (

            <nav className="navbar is-dark">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <div className="container">
                            <h1 className="title is-light">
                                Last.FM
                        </h1>
                            <h2 className="subtitle is-light">
                                Mats Hagen
                        </h2>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Header;