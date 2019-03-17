import React from 'react';
import PropTypes from 'prop-types';
import { getArtistInfo } from '../../Utils/api';
import { Link } from 'react-router-dom';



class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            bioBig: "",
            bioSummary: "",
            similar: [],
            listeners: "",
            playcount: "",
            tags: [],
            url: "",
            image: "",
        }
    }

    componentDidMount() {
        this.getArtistInfo(this.props.artistName);
    }

    getArtistInfo = (name) => {
        getArtistInfo(name)
            .then((info) => {
                console.log(info);
                this.setState({
                    name: info.artist.name,
                    bioBig: info.artist.bio.content,
                    bioSummary: info.artist.bio.summary,
                    similar: info.artist.similar.artist,
                    listeners: info.artist.stats.listeners,
                    playcount: info.artist.stats.playcount,
                    tags: info.artist.tags.tag,
                    url: info.artist.url,
                    image: info.artist.image[5]["#text"],
                });
            })
            .catch(error => console.log(error));

    }

    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <img src={this.props.image} alt="" />
                </div>
                <div className="card-content">
                    <h3 className="title">{this.props.artistName}</h3>
                    <div className="content">
                        <div className="tags are-medium has-addons">
                            <span className="tag tag-left">Scrobbles</span>
                            <span className="tag tag-right">{this.props.playCount}</span>
                        </div>
                        <div className="tags are-medium">
                            <Link to={{
                                pathname: `/artist/${this.props.artistName}`,
                                state: {
                                    name: this.state.name,
                                    bioBig: this.state.bioBig,
                                    bioSummary: this.state.bioSummary,
                                    similar: this.state.similar,
                                    listeners: this.state.listeners,
                                    playcount: this.state.playcount,
                                    tags: this.state.tags,
                                    url: this.state.url,
                                    image: this.state.image,
                                }
                            }}><span className="tag">More info</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Card;

Card.propTypes = {
    image: PropTypes.string,
    artistName: PropTypes.string,
    playCount: PropTypes.string,
}