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

            <section className="section">
                <div className="container">
                    <div className="columns">
                        {this.state.artists.map((element) => {
                            return (
                                <div className="column is-one-fifth" key={element.name}>
                                    <Card
                                        image={
                                            element.image[4]["#text"]
                                        }
                                        artistName={element.name}
                                        playCount={`Scrobbles: ${element.playcount}`}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

        );
    }

}


export default View;