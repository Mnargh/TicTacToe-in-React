import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './components/Cell.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cell />
      </div>
    );
  }
}

export default App;
