import React, { Component } from 'react';
import './App.scss';
import View from './Components/view';
import Header from './Components/header';
import connectAPI from './Utils/api';

class App extends Component {

  render() {
    console.log(connectAPI());

    return (
      <div className="App">
        <Header />
        <View />
      </div>
    );
  }
}

export default App;
