import React, { Component } from 'react';
import Cell from './Cell'
import '../App.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // render grid
      board: this.generateGrid(3, 3)
    }
  }

  renderCell(value) {
    return <Cell value={value} />
  };

  generateColumn(columns){
    var col = []
    for(var i = 0; i < columns; i++){
      col.push(this.renderCell(null));
    }
    return col;
  }

  generateGrid(rows, columns) {
    var grid = []

    for(var j = 0; j < rows; j++){
        grid.push(this.generateColumn(columns));
    }
    return grid;
  }


  render() {
    return (
      <div className="board">{this.state.board}</div>
    );
  }


}

export default Board;
