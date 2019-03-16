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
            <div className="container container-user">
                <div className="box box-user">
                    <div className="box-title">
                        <p className="title login-title">What is your LastFM username?</p>
                    </div>
                    <form onSubmit={this.submitHandler}>
                        <div className="control user-control">
                            <input type="text" className="input input-user" placeholder="Username" ref="name" />
                            <button type="submit" className="button button-user" onClick={this.handleInput}>Get Profile</button>
                        </div>
                    </form>
                    <p className="help">Your information won't persist</p>
                </div>
            </div>
        )
    }
}



export default User 