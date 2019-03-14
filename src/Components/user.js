import React from 'react';


class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }
    }

    submitHandler = (evt) => {
        evt.preventDefault();

        this.props.handlerFromParent(this.state.user);

        this.setState({
            user: '',
        })
    }

    handleInput = () => {
        const name = this.refs.name.value;
        this.setState(() => {
            return {
                user: name
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="box">
                    <div className="content">
                        <p className="title">What is your LastFM username?</p>
                    </div>
                    <div className="field">
                        Username
                    </div>
                    <form onSubmit={this.submitHandler}>
                        <div className="control">
                            <input type="text" className="input" placeholder="Text input" ref="name" />
                            <button type="submit" className="button" onClick={this.handleInput}>Get Profile</button>
                        </div>
                    </form>
                    <p className="help">Your information won't persist</p>
                </div>
            </div>
        )
    }
}



export default User 