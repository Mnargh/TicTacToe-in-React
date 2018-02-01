import React, { Component } from 'react';
import '../App.css';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
      // bomb = false
    };
  }


  handleclick() {
    this.setState({
      value: "X"
    })
  };

  render() {
    return (
      <div className="cell" onClick={() => this.handleclick() }>{this.props.value}</div>
    );
  }


}

export default Cell;
