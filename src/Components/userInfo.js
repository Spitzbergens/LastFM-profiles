import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = (props) => {

    return (
        <section className="section">
            <div className="box">
                <div className="level">
                    <div className="level-left">
                        <div className="columns">
                            <div className="column">
                                <h1 className="title">{props.name}</h1>
                            </div>
                            <div className="column">
                                <img src={props.image} />
                            </div>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="columns">
                            <div className="column">
                                <div className="content">
                                    <p>{props.playcount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default UserInfo;

UserInfo.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    playcount: PropTypes.string
}