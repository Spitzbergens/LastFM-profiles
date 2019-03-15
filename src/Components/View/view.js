import React from 'react';
import TopArtists from '../TopArtists/topArtists';
import { getTopArtists, getUserInfo, getUserFriends, getWeeklyArtists } from '../../Utils/api';
import Error from '../../error';
import UserInfo from '../UserInfo/userInfo';
import anonAvatar from '../../Image/512.png';





class View extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            userFriends: [],
            weekly: [],
            user: this.props.user,
            userImage: '',
            userPlaycount: '',
            userRealName: '',
            userExists: true,
            placeholderAvatar: "",
        }
    }

    async componentWillMount() {
        this.getUser();
        this.getWeekly();
    }

    componentDidMount() {
        this.getArtist();
        this.getUserFriends();
    }

    getUser = () => {

        const avatar = anonAvatar;

        getUserInfo(this.state.user)
            .then((data) => {
                const userarray = data.user.image;
                if (userarray[0]["#text"] === "") {
                    this.setState({
                        userImage: avatar,
                        userPlaycount: data.user.playcount,
                        userRealName: data.user.name,
                    })
                } else {
                    this.setState({
                        userImage: data.user.image[2]["#text"],
                        userPlaycount: data.user.playcount,
                        userRealName: data.user.name,
                    })
                }

                if (data.user.playcount === "0") {
                    this.setState({
                        userExists: false,
                    });
                }
            })
    }

    getWeekly = () => {
        getWeeklyArtists(this.state.user)
            .then((data) => {
                const array = data.weeklyartistchart.artist.slice(0, 20);
                this.setState({
                    weekly: array
                });
            }).catch(error => console.log(error));
    }


    getArtist = () => {
        getTopArtists(this.state.user).then(
            (data) => {
                const artist = data.topartists
                this.setState({
                    artists: artist.artist
                });
            }
        ).catch((error) => {
            return (
                <Error
                    message={error}
                />
            )
        })
    }

    getUserFriends = () => {
        getUserFriends(this.state.user)
            .then((data) => {
                this.setState({
                    userFriends: data.friends.user,
                });
            }).catch((error) => {
                console.error(error)
            })
    }

    render() {
        return (
            <div className="container">

                {this.state.userExists ?
                    (
                        <span>
                            <UserInfo
                                image={this.state.userImage}
                                name={this.state.userRealName}
                                playcount={this.state.userPlaycount}
                                friends={this.state.userFriends}
                                weekly={this.state.weekly}
                            />
                            <TopArtists
                                artists={this.state.artists}
                            />
                        </span>
                    ) : (
                        <span>
                            <Error />
                        </span>
                    )
                }

            </div>

        );
    }

}


export default View;