import React, { Component } from 'react';
import './App.scss';
import View from './Components/view';
import Header from './Components/header';
import User from './Components/user';
import connectAPI from './Utils/api';

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
      <div className="App">
        <Header />

        {this.state.user ? (<View />) :
          (<User
            handlerFromParent={this.fromUser}
          />)}

      </div>
    );
  }
}

export default App;
