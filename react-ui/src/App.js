import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MySong.fm</h1>
          <h2>brought to you by Carter Duncan, Ross Salge, Tim Ninan</h2>
        </header>
        <p className="App-intro">
          This is going to be an experience of a lifetime
        </p>
      </div>
    );
  }
}

export default App;
