import React, { Component } from 'react';
import Cell from './Cell'
import '../App.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div><Cell /><Cell /><Cell /></div>

    );
  }


}

export default Board;
