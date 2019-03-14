import React from 'react';
import Card from './card';
import ConnectAPI from '../Utils/api';

class View extends React.Component {

    constructor() {
        super();
        this.state = {
            artists: []
        }
    }

    componentDidMount() {
        this.getArtist();
    }

    getArtist = () => {
        ConnectAPI().then(
            (data) => {
                const artist = data.topartists
                this.setState({
                    artists: artist.artist
                });
            }
        )
    }

    render() {
        return (
            <div className="container">
                {this.state.artists.map((element) => {
                    return (
                        <Card
                            key={element.name}
                            image={
                                element.image[4]["#text"]
                            }
                            artistName={element.name}
                            playCount={element.playcount}
                        />
                    )
                })}
            </div>

        );
    }

}


export default View;