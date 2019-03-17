import React from 'react';

class Artist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    async componentDidMount() {
        const { name, bioBig, bioSummary, similar, listeners, playcount, tags, url, image } = this.props.location.state;
        await this.setState({ name, bioBig, bioSummary, similar, listeners, playcount, tags, url, image });
    }

    render() {
        return (
            <section className="section artist-info">

                <div className="container">

                    <h1 className="title artist-title">{this.state.name}</h1>
                    <div className="columns">
                        <div className="column is-two-fifths">
                            <div className="box box-artist">
                                <div className="level-item">
                                    <figure className="image">
                                        <img src={this.state.image} alt="i" />
                                    </figure>
                                </div>
                                <div className="level-item-text">
                                    <div className="content content-artist-description">
                                        <div className="content-left">
                                            <p className="description">
                                                Listeners
                                            </p>
                                        </div>
                                        <div className="content-right">
                                            <p className="value">{this.state.listeners}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" level-item-text">

                                    <div className="content content-artist-description">
                                        <div className="content-left">
                                            <p className="description">
                                                Total scrobbles
                                            </p>
                                        </div>
                                        <div className="content-right">
                                            <p className="value">{this.state.playcount}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-tags">
                                    <div className="tags tags-genre">
                                        {this.state.tags && this.state.tags.map((tag) => {
                                            return (
                                                <span className="tag tag-genre" key={tag.name}>
                                                    {tag.name}
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="column">
                            <div className="level-items">

                                <h1 className="title">
                                    Bio
                                </h1>



                                <p className="bio">
                                    {`${this.state.bioSummary}`}
                                </p>



                            </div>
                        </div>

                    </div>
                </div>


            </section>
        )
    }

}

export default Artist;