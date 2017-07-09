import React from 'react';
import Card from './Card';
import { shallow, mount } from 'enzyme'

describe('CARD TEST - ALL', () => {
  it('info should render as a paragraph, names should render as a header', () =>{
    const data =
     {
       name: "Executor",
       model: "Executor-class star dreadnought",
       passengers: "38000",
       starship_class: "Star dreadnought",
      }

      const wrapper = shallow(<Card data={data}/> )
      const content = wrapper.find('p')
      const header = wrapper.find('h3')

      expect(content.length).toEqual(3)
      expect(header.node.props.children).toContain("Executor")

  })

  it('should have an on click function for the favorite button', () =>{
    const toggleFavorite = jest.fn()
    const data =
     {
       name: "Executor",
       model: "Executor-class star dreadnought",
       passengers: "38000",
       starship_class: "Star dreadnought",
      }
    const wrapper = shallow(<Card data={data} toggleFavorite={toggleFavorite}/>)
    const button = wrapper.find('.card-favorite-button')

    button.simulate('click')

    expect(toggleFavorite.mock.calls.length).toBe(1);
  })
});
