import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Board from '.././components/Board.js'
import Cell from '.././components/Cell.js'

describe ("Testing Board component", () => {

  const board = shallow(<Board />)

  it("Renders as a div", () => {
    expect(board.type()).toBe('div');
  })

  it("Renders 9 cells inside the board", () => {
    expect(board.find('Cell')).toHaveLength(9)
  })
  
  it("Starts with a state of an empty array", () => {
    expect(board.state("board")).toEqual([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]);
  })


});
