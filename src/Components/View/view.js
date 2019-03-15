import React from 'react';
import TopArtists from '../TopArtists/topArtists';
import { getTopArtists, getUserInfo, getUserFriends, getWeeklyArtists } from '../../Utils/api';
import Error from '../../error';
import UserInfo from '../UserInfo/userInfo';

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
            userExists: false,
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

        getUserInfo(this.state.user)
            .then((data) => {
                console.log(data);
                this.setState({
                    userImage: data.user.image[2]["#text"],
                    userPlaycount: data.user.playcount,
                    userRealName: data.user.name,
                })


                if (data.user.playcount !== "0") {
                    this.setState({
                        userExists: true
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
                {this.state.userExists === true &&
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