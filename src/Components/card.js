import React from 'react';
import PropTypes from 'prop-types';



const Card = (props) => {

    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} />
            </div>
            <div className="card-content">
                <p className="title">{props.artistName}</p>
                <div className="content">
                    <p className="subtitle">
                        {props.playCount}
                    </p>
                </div>
            </div>
        </div>
    )

}
export default Card;

Card.propTypes = {
    image: PropTypes.string,
    artistName: PropTypes.string,
    playCount: PropTypes.string,
}