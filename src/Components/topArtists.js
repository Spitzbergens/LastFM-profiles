import React from 'react';
import Card from './card';
import PropTypes from 'prop-types';

const TopArtists = (props) => {

    return (
        <section className="section">
            <div className="hero">
                <div className="hero-body">
                    <p className="title">Top artists</p>
                </div>
            </div>
            <div className="tile-wrapper">
                {props.artists.map((element) => {
                    return (
                        <div className="tiles" key={element.name}>
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
        </section>
    )
}
export default TopArtists;

TopArtists.propTypes = {
    artists: PropTypes.array,
}

