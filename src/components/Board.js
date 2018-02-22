import React, { Component } from 'react';
import Cell from './Cell'
import '../App.css';

class Board extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null)
    };
  }

  
  renderCell(value) {
    return <Cell
      value={this.state.board[value]}
      // onClick={() => this.handleClick()}
     />
  };

  // generateColumn(columns){
  //   var col = []
  //   for(var i = 0; i < columns; i++){
  //     col.push(this.renderCell(null));
  //   }
  //   return col;
  // }

  // generateGrid(rows, columns) {
  //   var grid = []

  //   for(var j = 0; j < rows; j++){
  //       grid.push(this.generateColumn(columns));
  //   }
  //   return grid;
  // }


  render() {

    const status = 'Next player: X;'
    
    return (
      <div>
        <div className="status">{status}</div>
          <div className="board-row">
            {this.renderCell(1)}
            {this.renderCell(2)}
            {this.renderCell(3)}
          </div>
          <div className="board-row">
            {this.renderCell(4)}
            {this.renderCell(5)}
            {this.renderCell(6)}
          </div>
          <div className="board-row">
            {this.renderCell(7)}
            {this.renderCell(8)}
            {this.renderCell(9)}
          </div>
      </div>
    );
  }


}

export default Board;
