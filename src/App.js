import React, { Component } from 'react';
import './App.scss';
import View from './Components/View/view';
import Header from './Components/header';
import User from './Components/User/user';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
    }
  }


  fromUser = (data) => {
    this.setState({
      user: data
    });
  }



  render() {
    return (
      <Router>
        <div className="App">

          <Header
            username={this.state.user}
          />
          {this.state.user ? (<View
            user={this.state.user}
          />) :
            (<User
              handlerFromParent={this.fromUser}
            />)}

        </div>
      </Router>
    );
  }
}

export default App;
