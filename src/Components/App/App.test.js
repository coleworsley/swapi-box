import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import { mockPeople, mockHomeworld, mockSpecies, mockPlanets, mockResident, mockFilms, mockVehicles } from '../../Helpers/MockData'
import fetchMock from 'fetch-mock'
// localStorage = require("jest-localstorage-mock");

const storageMock = () => {
    const storage = {};
    return {

      clear() {
        return this.location = '';
      },
      getItem(key) {
        return key in storage ? storage[key] : null;
      },
      setItem: function(key, value) {
        storage[key] = value.toString();
      }
    };
  };

  window.localStorage = storageMock();



describe('APP TEST - ON LOAD', () => {

  beforeEach(() => {
    fetchMock.get('https://swapi.co/api/films/', {
      status: 200,
      body: mockFilms,
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
    const wrapper = mount(<App/>)
    await resolveAfter2Seconds()

    const cardContainer = wrapper.find('.card-container')
    const nav = wrapper.find('nav')
    const aside = wrapper.find('aside')

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

    fetchMock.get('https://www.swapi.co/api/planets/', {
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



  it('should fire an API call function depending on which tab is clicked', async () => {
    const wrapper = mount(<App/>)
    const peopleTab = wrapper.find('#people-button')

    peopleTab.simulate('click')

    expect(fetchMock.called()).toEqual(true);

    await resolveAfter2Seconds()

    expect(fetchMock.lastUrl()).toEqual('http://swapi.co/api/species/1/');
  })


  it('state should update for "active" and for the name of button that was clicked', async () =>{

    const wrapper = mount(<App/>)
    const peopleTab = wrapper.find('#people-button')

    peopleTab.simulate('click')

    await resolveAfter2Seconds()

    expect(wrapper.state().active).toEqual("people")
    expect(wrapper.state().people).toHaveLength(4)
    expect(wrapper.state().people[0].name).toEqual("Luke Skywalker")
  })

  it('a loader should render while the dom updates', () =>{

  })

  it('cards should render once the api call is complete', async () =>{
    const wrapper = mount(<App/>)
    const peopleTab = wrapper.find('#people-button')

    peopleTab.simulate('click')

    await resolveAfter2Seconds();

    const cards = wrapper.find('.card');

    expect(cards.length).toEqual(4)
  })

  it('clicking on a new tab should cause state to update', async () =>{
    const wrapper = mount(<App/>)
    const planetsTab = wrapper.find('#planets-button')
    const peopleTab = wrapper.find('#people-button')

    peopleTab.simulate('click')
    planetsTab.simulate('click')

    await resolveAfter2Seconds();

    expect(wrapper.state().active).toEqual("planets")
    expect(wrapper.state().planets).toHaveLength(2)
    expect(wrapper.state().planets[0].name).toEqual("Alderaan")
  })

  it('local storage should update when state updates', () =>{

  })
})

describe('APP TEST - ON FAVORITE CLICK - CARD', () => {

  beforeEach(() => {
    fetchMock.get('https://swapi.co/api/films/', {
      status: 200,
      body: mockFilms,
    })

    fetchMock.get('https://swapi.co/api/people/', {
      status: 200,
      body: mockPeople,
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

  it('should cause state to update for favorites', async () =>{
    const wrapper = mount(<App/>)
    const peopleTab = wrapper.find('#people-button')
    const cardList = wrapper.find('.card-container');

    peopleTab.simulate('click')
    await resolveAfter2Seconds()

    expect(wrapper.state().favorites).toHaveLength(0)

    const card = cardList.childAt(0)
    const favoriteButton = card.find('.card-favorite-button')

    favoriteButton.simulate('click')

    expect(wrapper.state().favorites).toHaveLength(1)
    expect(wrapper.state().favorites[0].name).toEqual("Luke Skywalker")
  })

  it('it should unfavorite cards if theyre clicked again by removing them from state', async () =>{
    const wrapper = mount(<App/>)
    const peopleTab = wrapper.find('#people-button')
    const cardList = wrapper.find('.card-container');

    peopleTab.simulate('click')
    await resolveAfter2Seconds()

    expect(wrapper.state().favorites).toHaveLength(0)

    const card = cardList.childAt(0)
    const favoriteButton = card.find('.card-favorite-button')

    favoriteButton.simulate('click')

    expect(wrapper.state().favorites).toHaveLength(1)
    expect(wrapper.state().favorites[0].name).toEqual("Luke Skywalker")

    favoriteButton.simulate('click')
    expect(wrapper.state().favorites).toHaveLength(0)
  })
})

describe('APP TEST - ON FAVORITE CLICK - PAGE', () => {

    beforeEach(() => {
      fetchMock.get('https://swapi.co/api/films/', {
        status: 200,
        body: mockFilms,
      })

      fetchMock.get('https://swapi.co/api/people/', {
        status: 200,
        body: mockPeople,
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



    it('should render only cards in favorites', async () =>{
      const wrapper = mount(<App/>)
      const peopleTab = wrapper.find('#people-button')
      const cardList = wrapper.find('.card-container');
      const showFavorites = wrapper.find('#favorite-button')

      peopleTab.simulate('click')
      await resolveAfter2Seconds()

      expect(wrapper.state().favorites).toHaveLength(0)

      const card = cardList.childAt(0)
      const favoriteButton = card.find('.card-favorite-button')
      let cards = wrapper.find('.card');

      expect(cards.length).toEqual(4)

      favoriteButton.simulate('click')
      showFavorites.simulate('click')

      cards = wrapper.find('.card');

      expect(cards.length).toEqual(1)
    })

  it('should cause state to update', () =>{
    const wrapper = mount(<App/>)
    const showFavorites = wrapper.find('#favorite-button')

    showFavorites.simulate('click')

    expect(wrapper.state().active).toEqual('favorites')

  })
})
