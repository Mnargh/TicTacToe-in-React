import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Cell from '.././components/Cell'

describe ('testing Cell component', () => {
  // let wrapper;
  // beforeEach(() => { wrapper = shallow(<App />); });

  const cell = shallow(<Cell />)

  it('Cell renders as a div', () => {
    expect(cell.type()).toBe('div');
  });

  it('Cell div can have text of the cell state inside', () => {
    const cell = shallow(<Cell />)
    expect(cell.text()).toBe('This cell is revealed equals false');
  });

  // it ('Cell initialises as unrevealed', () => {
  //   console.log(cell.state);
  //   expect(cell.state.revealed).toBe("cell");
  // });



  //
  // it('Cell div hasMine default state is false ', () => {
  //   const cell = shallow(<Cell />)
  //   expect(cell.state("hasMine")).toBe(false);
  // });

});
