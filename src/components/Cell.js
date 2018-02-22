import React, { Component } from 'react';
import '../App.css';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
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
      <div className="cell" onClick={() => this.handleclick() }>{this.state.value}</div>
    );
  }


}

export default Cell;
