import React from 'react';
import TopArtists from './topArtists';
import { getTopArtists, getUserInfo, getUserFriends } from '../Utils/api';
import Error from '../error';
import UserInfo from './userInfo';

class View extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            userFriends: [],
            user: this.props.user,
            userImage: '',
            userPlaycount: '',
            userRealName: '',
            userExists: false,
        }

    }

    async componentWillMount() {
        await this.getUser();
    }



    componentDidMount() {
        this.getArtist();
        this.getUserFriends();
    }



    getUser = () => {

        getUserInfo(this.state.user)
            .then((data) => {
                this.setState({
                    userImage: data.user.image[2]["#text"],
                    userPlaycount: data.user.playcount,
                    userRealName: data.user.realname
                })
                console.log(data.user.playcount)
                if (data.user.playcount !== "0") {
                    this.setState({
                        userExists: true
                    });
                }
            })
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
                {this.state.userExists === true &&
                    <span>
                        <UserInfo
                            image={this.state.userImage}
                            name={this.state.userRealName}
                            playcount={this.state.userPlaycount}
                            friends={this.state.userFriends}
                        />
                        <TopArtists
                            artists={this.state.artists}
                        />
                    </span>
                }

                {this.state.userExists === false &&
                    <span>
                        <Error
                            error="This users does not exist"
                        />
                    </span>
                }
            </div>

        );
    }

}


export default View;