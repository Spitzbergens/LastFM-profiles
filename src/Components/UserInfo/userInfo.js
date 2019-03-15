import React from 'react';
import PropTypes from 'prop-types';
import WeeklyArtists from '../WeeklyArtists/weeklyArtists';
import { Link } from 'react-router-dom';

const UserInfo = (props) => {

    return (
        <section className="section section-userinfo">
            <div className="level-userinfo">
                <div className="columns">
                    <div className="column is-two-fifths">
                        <div className="left">
                            <div className="box">
                                <div className="columns columns-userinfo">
                                    <div className="column">
                                        <h1 className="title">{props.name}</h1>
                                    </div>
                                    <div className="column">
                                        <img className="profile-img" src={props.image} alt="" />
                                    </div>
                                    <div className="column">
                                        <div className="tags are-medium has-addons">
                                            <span className="tag tag-left">Scrobbles</span>
                                            <span className="tag tag-right">{props.playcount}</span>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <WeeklyArtists
                                            weekly={props.weekly}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="right">

                            <div className=" anchestor-userinfo">
                                <h3 className="title">Friends</h3>
                                <div className="child-userinfo">
                                    {props.friends.map((users) => {
                                        return (
                                            <div className="box box-friends" key={users.name || users.realname}>
                                                <article className="media">
                                                    <div className="media-left">
                                                        <figure className="image">
                                                            <img className="profile-img" src={users.image[1]["#text"]} alt="" />
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
                                                        </p>

                                                        <div className="tags has-addons">
                                                            <span className="tag tag-left">Scrobbles</span>
                                                            <span className="tag tag-right">{users.playcount}</span>
                                                        </div>


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