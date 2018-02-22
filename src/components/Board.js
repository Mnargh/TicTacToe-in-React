import React, { Component } from 'react';
import Cell from './Cell'
import '../App.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      // board: this.generateGrid(3, 3)
      board: Array(3).fill(Array(3).fill(null))
    }
  }

  
  renderCell(value) {
    return <Cell
      value={value}
      // onClick={() => this.handleClick()}
     />
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
