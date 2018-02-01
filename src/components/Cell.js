import React, { Component } from 'react';
import '../App.css';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      revealed: false
      // bomb = false
    };
  }

  handleclick() {
    this.state.revealed = true;
  };



  render() {
    return (
      <div className="cell" onClick={() => this.handleclick() }>This cell is revealed equals {this.state.revealed.toString()}</div>
    );
  }


}

export default Cell;
