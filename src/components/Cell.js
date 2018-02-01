import React, { Component } from 'react';
import '../App.css';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // revealed = false
      // bomb = false
    };
  }

  render() {
    return (
      <div className="Cell"> Cell </div>
    );
  }


}

export default Cell;
