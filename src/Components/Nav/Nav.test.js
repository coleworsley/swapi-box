import React from 'react';
import Nav from './Nav';
import { shallow, mount } from 'enzyme'

describe('NAV - ALL', () => {

  it('should contain 4 buttons', () =>{
    const wrapper = shallow(<Nav/>)

    const buttons = wrapper.find('button')

    expect(buttons.length).toEqual(4)
  })

  it.only('should fire an onclick function when any of the 4 buttons are clicked', () =>{
    const getData = jest.fn()
    const wrapper = shallow(<Nav getData={getData}/>)

    const button = wrapper.find('#favorite-button')

    button.simulate('click')
    button.simulate('click')

    expect(getData.mock.calls.length).toBe(2);
  })
});
