import React from 'react';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme'
import { mockVehicles } from '../../Helpers/MockData'

describe('CARD CONTAINER TEST - ALL', () => {

  it('should render 1 card for each item passed in through props', () =>{
    const cardData = mockVehicles.results
    const dataLength = cardData.length
    const toggleFavorite = jest.fn()
    const favoritesArray = []
    const wrapper = mount(<CardContainer cardData={cardData} toggleFavorite={toggleFavorite} favoritesArray={favoritesArray}/>)
    const cardList = wrapper.find('.card')

    expect(cardList.length).toEqual(dataLength)
  })

  it('should not render if props passed to it have no data', () =>{
    const cardData = []
    const toggleFavorite = jest.fn()
    const favoritesArray = []
    const wrapper = mount(<CardContainer cardData={cardData} toggleFavorite={toggleFavorite} favoritesArray={favoritesArray}/>)
    const cardList = wrapper.find('.card')

    expect(cardList.length).toEqual(0)
  })
});
