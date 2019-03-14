import React from 'react';
import TopArtists from './topArtists';
import { getTopArtists, getUserInfo } from '../Utils/api';
import Error from '../error';
import UserInfo from './userInfo';

class View extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            user: this.props.user,
            userImage: '',
            userPlaycount: '',
            userRealName: '',

        }
    }

    componentDidMount() {
        this.getUser();
        this.getArtist();
    }

    getUser = () => {
        getUserInfo(this.state.user)
            .then((data) => {
                console.log(data)
                this.setState({
                    userImage: data.user.image[2]["#text"],
                    userPlaycount: data.user.playcount,
                    userRealName: data.user.realname
                })
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

    render() {
        return (
            <div className="container">

                <UserInfo
                    image={this.state.userImage}
                    name={this.state.userRealName}
                    playcount={this.state.userPlaycount}
                />

                <TopArtists
                    artists={this.state.artists}
                />
            </div>

        );
    }

}


export default View;