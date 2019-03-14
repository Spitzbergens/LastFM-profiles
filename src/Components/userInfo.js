import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserInfo = (props) => {

    return (
        <section className="section">
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
                                <p>{`Total scrobbles: ${props.playcount}`}</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="tile is-ancestor">
                                <p className="subtitle">Friends</p>
                                <div className="tile is-child">
                                    {props.friends.map((users) => {
                                        return (
                                            <div className="box">
                                                <article className="media">
                                                    <div className="media-left">
                                                        <figure className="image">
                                                            <img src={users.image[1]["#text"]} />
                                                        </figure>
                                                    </div>
                                                    <div className="media-content">
                                                        <p>
                                                            <strong>
                                                                {users.name}
                                                            </strong>
                                                            <small>
                                                                <Link to={users.url}>
                                                                    {` @${users.name}`}
                                                                </Link>
                                                            </small>
                                                            <br />
                                                            {users.country && `Country: ${users.country}`}
                                                            <br />

                                                            Scrobbles: {users.playcount}

                                                        </p>
                                                    </div>
                                                </article>

                                            </div>
                                        )
                                    })}

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