import React, { Component } from 'react';
import './App.css';
import Cell from './components/Cell.js'
import Board from './components/Board.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
