import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Cell from '.././components/Cell'

describe ('testing Cell component', () => {
  // let wrapper;
  // beforeEach(() => { wrapper = shallow(<App />); });

  const cell = shallow(<Cell value={null}/>);

  it('Cell renders as a div', () => {
    expect(cell.type()).toBe('div');
  });

  it('Cell div is empty when initially rendered', () => {
    expect(cell.text()).toEqual('');
  });

  it ('Cell initialises with null value', () => {
    expect(cell.state("value")).toBe(null);
  });

  it ('Cell is filled with a symbol when clicked', () => {
    cell.simulate('click', { revealCell() {} });
    expect(cell.state("value")).toBe("X");
  });





  //
  // it('Cell div hasMine default state is false ', () => {
  //   const cell = shallow(<Cell />)
  //   expect(cell.state("hasMine")).toBe(false);
  // });

});
