import React, { Component } from 'react';
import Cell from './Cell'
import '../App.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderCell(value) {
    return <Cell value={value} />
  };


  render() {
    return (
      <div>{this.renderCell(null)}</div>
    );
  }


}

export default Board;
