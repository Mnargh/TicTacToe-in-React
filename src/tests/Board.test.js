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

  it("Renders a cell inside the board", () => {
    expect(board.find('Cell')).toHaveLength(1)
  })
  //
  // it("Renders state as column of cells", () => {
  //   expect(board.state("grid")).toEqual([<Cell />, <Cell />, <Cell />]);
  // })


});
