import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './name.js'
import Quote from './quote.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Name />
        </header>
        <Quote />
      </div>
    );
  }
}



export default App;
