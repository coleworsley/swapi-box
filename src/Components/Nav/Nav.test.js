import React from 'react';
import Nav from './Nav';
import { shallow, mount } from 'enzyme'

describe('NAV - ALL', () => {
  it('should contain 4 buttons', () =>{
    const wrapper = shallow(<Nav/>)
    const buttons = wrapper.find('button');

    expect(buttons.length).toEqual(4);
  })

  it('should fire an onclick function when any of the 4 buttons are clicked', () =>{
    const mockfn = jest.fn();
    const activeCard = 'people';
    const wrapper = shallow(<Nav getData={mockfn} activeCard={activeCard}/>);

    const vehiclesBtn = wrapper.find('.vehicles-button')
    console.log(vehiclesBtn.debug())

    expect(true).toEqual(false);
  })
});
