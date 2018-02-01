import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Cell from '.././components/Cell'

describe ('testing Cell component', () => {
  // let wrapper;
  // beforeEach(() => { wrapper = shallow(<App />); });

  const cell = shallow(<Cell value={1}/>);

  it('Cell renders as a div', () => {
    expect(cell.type()).toBe('div');
  });

  it('Cell div can have text of the cell state inside', () => {
    expect(cell.text()).toBe('Cell number: 1 Revealed?: false');
  });

  it ('Cell initialises as unrevealed', () => {
    expect(cell.state("revealed")).toBe(false);
  });

  it ('Cell state changes to revealed when clicked', () => {
    cell.simulate('click', { revealCell() {} });
    expect(cell.state("revealed")).toBe(true);
  });





  //
  // it('Cell div hasMine default state is false ', () => {
  //   const cell = shallow(<Cell />)
  //   expect(cell.state("hasMine")).toBe(false);
  // });

});
