import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { name: "fiorella" };
  }
  render() {
    return (
      <div className="App">
          <video controls="controls"></video>
      </div>
    );
  }

}

export default App;
