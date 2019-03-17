import React from 'react';
import PropTypes from 'prop-types';
import WeeklyArtists from '../WeeklyArtists/weeklyArtists';
import avatar from '../../Image/icon.svg';

class UserInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
    }


    render() {
        const userAvatar = avatar;
        return (
            <section className="section section-userinfo">
                <div className="level-userinfo">
                    <div className="columns">
                        <div className="column is-two-fifths">
                            <div className="left">
                                <div className="box">
                                    <div className="columns columns-userinfo">
                                        <div className="column">
                                            <h1 className="title title-user">{this.props.name}</h1>
                                        </div>
                                        <div className="column">
                                            <img className="profile-img" src={this.props.image} alt="" />
                                        </div>
                                        <div className="column">
                                            <div className="tags are-medium has-addons">
                                                <span className="tag tag-left">Scrobbles</span>
                                                <span className="tag tag-right">{this.props.playcount}</span>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <WeeklyArtists
                                                weekly={this.props.weekly}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="right">

                                <div className=" anchestor-userinfo">
                                    <h3 className="title title-friends">Friends</h3>
                                    <div className="child-userinfo">
                                        {this.props.friends.map((users) => {
                                            return (
                                                <div className="box box-friends" key={users.name || users.realname}>

                                                    <article className="media">
                                                        <div className="media-left">
                                                            <figure className="image">
                                                                {users.image[1]["#text"] !== "" ? (<img className="profile-img" src={users.image[1]["#text"]} alt="" />) : (<img className="profile-img-avatar" src={userAvatar} alt="" />)}

                                                            </figure>
                                                        </div>
                                                        <div className="media-content">
                                                            <p>
                                                                <strong className="friends-title-bold">
                                                                    {users.name}
                                                                </strong>
                                                                <small className="friends-title-small" name={users.name} >
                                                                    <a className="lastfm-url" href={users.url}> {` @${users.name}`}</a>
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

}

export default UserInfo;

UserInfo.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    playcount: PropTypes.string
}