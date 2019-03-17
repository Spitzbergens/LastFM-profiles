import React, { Component } from 'react';
import './App.scss';
import View from './Components/View/view';
import Header from './Components/Header/header';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
    }
  }


  handleInput = () => {
    const name = this.refs.name.value;
    this.setState(() => {
      return {
        user: name
      }
    });
  }



  render() {
    return (


      <div className="main-wrapper">
        <div className="App">

          <Header />

          {this.state.user ?
            (<View user={this.state.user} />
            ) :

            (<div className="container container-user">
              <div className="box box-user">
                <div className="box-title">
                  <p className="title login-title">What is your Last.FM username?</p>
                </div>

                <div className="control user-control">
                  <form onSubmit={this.handleInput}>
                    <input type="text" className="input input-user" placeholder={`e.g. "Matshagen"`} ref="name" />
                    <button type="submit" className="button button-user" onSubmit={this.handleInput}>Get Profile</button>
                  </form>
                </div>


                <p className="help">Your information won't persist</p>
              </div>
            </div>)}

        </div>
      </div>

    );
  }
}

export default App;
