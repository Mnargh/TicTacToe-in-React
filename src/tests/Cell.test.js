import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Cell from '.././components/Cell'

describe ('testing Cell component', () => {
  // let wrapper;
  // beforeEach(() => { wrapper = shallow(<App />); });

  it('Cell renders as a div', () => {
    const cell = shallow(<Cell />)
    expect(cell.type()).toBe('div');
  });


  // it('Cell div can have text of the cell state inside', () => {
  //   const cell = shallow(<Cell />)
  //   expect(cell.text()).toBe('This cell has a mine equals false');
  // });
  //
  // it('Cell div hasMine default state is false ', () => {
  //   const cell = shallow(<Cell />)
  //   expect(cell.state("hasMine")).toBe(false);
  // });

});
