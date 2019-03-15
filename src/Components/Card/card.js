import React from 'react';
import PropTypes from 'prop-types';



const Card = (props) => {

    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt="" />
            </div>
            <div className="card-content">
                <h3 className="title">{props.artistName}</h3>
                <div className="content">
                    <div className="tags has-addons">
                        <span className="tag tag-left">Scrobbles</span>
                        <span className="tag tag-right">{props.playCount}</span>
                    </div>
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