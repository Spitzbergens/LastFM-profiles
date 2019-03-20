import React from 'react';
import Card from '../Card/card';
import PropTypes from 'prop-types';

const TopArtists = (props) => {

    return (
        <section className="section section-top-artists">

            <div className="content">
                <div className="hero">
                    <div className="hero-body">
                        <h1 className="title artist-title">Top artists</h1>
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
                                    playCount={element.playcount}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default TopArtists;

TopArtists.propTypes = {
    artists: PropTypes.array,
}

