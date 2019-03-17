import React, { Component } from 'react';
import './App.scss';
import View from './Components/View/view';
import Header from './Components/Header/header';
import Artist from './Components/Artist/artist';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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


      <Router>
        <div className="main-wrapper">
          <div className="App">

            <Header />

            {this.state.user ?
              (
                <Switch>
                  <Route exact path={"/"} render={() => <View user={this.state.user} />} />
                  <Route path={`/artist/:artistName`} component={Artist} />
                </Switch>
              ) :

              (<div className="container container-user">
                <div className="box box-user">
                  <div className="box-title">
                    <p className="title login-title">What is your Last.FM username?</p>
                  </div>

                  <div className="control user-control">

                    <input type="text" className="input input-user" placeholder={`e.g. "Matshagen"`} ref="name" />
                    <button type="submit" className="button button-user" onClick={this.handleInput}>Get Profile</button>

                  </div>


                  <p className="help">Your information won't persist</p>
                </div>
              </div>)}

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
