import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme'
import { filmMock } from '../../Helpers/MockData/filmMock'
import fetchMock from 'fetch-mock'

describe('APP TEST - ON LOAD', () => {

  beforeEach(() => {
    fetchMock.get('https://swapi.co/api/films', {
      status: 200,
      body: filmMock,
    })
  });


  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  })


  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }



  it('should render a nav, a sidebar, and a card container on load', async () =>{
    // console.log(wrapper.debug())
    const wrapper = mount(<App/>)
    await resolveAfter2Seconds

    const cardContainer = wrapper.find('.card-container')
    const nav = wrapper.find('nav')
    const aside = wrapper.find('aside')

    // console.log(wrapper.debug())

    expect(cardContainer).toHaveLength(1)
    expect(nav.length).toEqual(1)
    expect(aside.length).toEqual(1)
  })

  it('should hold state, and state should be empty if localstorage is empty', () =>{

  })

  it('state should load from local storage if possible', () =>{

  })
});

describe('APP TEST - ON BUTTON CLICK', () => {
  it('should fire an API call function depending on which tab is clicked', () =>{

  })

  it('state should update for "active" and for the name of button that was clicked', () =>{

  })

  it('a loader should render while the dom updates', () =>{

  })

  it('cards should render once the api call is complete', () =>{

  })

  it('clicking on a new tab should cause state to update', () =>{

  })

  it('local storage should update when state updates', () =>{

  })
})

describe('APP TEST - ON FAVORITE CLICK - PAGE', () => {
  it('should filter to only show favorited cards', () =>{

  })

  it('should cause state to update', () =>{

  })
})

describe('APP TEST - ON FAVORITE CLICK - CARD', () => {
  it('should cause state to update', () =>{

  })
})
