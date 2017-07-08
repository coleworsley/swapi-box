import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import { mockPeople, mockHomeworld, mockSpecies, mockPlanets, mockResident, mockFilms, mockVehicles } from '../../Helpers/MockData'


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
  });

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
    await resolveAfter2Seconds()

    const cardContainer = wrapper.find('.card-container')
    const nav = wrapper.find('nav')
    const aside = wrapper.find('aside')

    // console.log(wrapper.debug())

    expect(cardContainer).toHaveLength(1)
    expect(nav.length).toEqual(1)
    expect(aside.length).toEqual(1)
  })

  it('should hold state, and state should be empty if localstorage is empty', () =>{
    const wrapper = shallow(<App/>)


    expect(wrapper.state()).toEqual(
      {
        "active": "loading",
        "favorites": [],
        "people": [],
        "planets": [],
        "vehicles": [],
        "loading": false,
      })
      })

  it('state should load from local storage if possible', () =>{

  })
});

describe('APP TEST - ON BUTTON CLICK', () => {

  beforeEach(() => {
    fetchMock.get('https://swapi.co/api/films/', {
      status: 200,
      body: mockFilms,
    })

    fetchMock.get('https://swapi.co/api/people/', {
      status: 200,
      body: mockPeople,
    })

    fetchMock.get('http://swapi.co/api/people/1/', {
      status: 200,
      body: mockResident,
    })

    fetchMock.get('http://www.swapi.co/api/planets/', {
      status: 200,
      body: mockPlanets,
    })

    fetchMock.get('https://swapi.co/api/starships/', {
      status: 200,
      body: mockVehicles,
    })
// http://swapi.co/api/planets/1
    fetchMock.get('http://swapi.co/api/planets/1/', {
     status: 200,
     body: mockHomeworld,
   })
  //http://swapi.co/api/species/1/
   fetchMock.get('http://swapi.co/api/species/1/', {
      status: 200,
      body: mockSpecies,
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



  it.only('should fire an API call function depending on which tab is clicked', async () => {
    const wrapper = mount(<App/>)

    const peopleTab = wrapper.find('#people-button')
    peopleTab.simulate('click')
    // expect(fetchMock.called()).toEqual(true);
    await resolveAfter2Seconds()
    expect(fetchMock.lastUrl()).toEqual('http://swapi.co/api/species/1/');
    expect(fetchMock.lastOptions()).toEqual({
      method: 'POST',
      body: '{"grocery":{"name":"Foo","quantity":"1000"}}',
      headers: { 'Content-Type': 'application/json' }
    });


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
