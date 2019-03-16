import React from 'react';
import PropTypes from 'prop-types';

const WeeklyArtists = (props) => {

    return (
        <div>
            <h3 className="subtitle subtitle-weekly">Recently played</h3>
            <div className="tags-wrapper">
                <div className="tags are-medium tags-weekly-user">
                    {props.weekly.map((artists) => {
                        return (
                            <div className="tag" key={artists.name}>{artists.name}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default WeeklyArtists;

WeeklyArtists.propTypes = {
    weekly: PropTypes.array
}