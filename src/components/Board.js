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

      <div><Cell value={1} />
    </div>

    );
  }


}

export default Board;
