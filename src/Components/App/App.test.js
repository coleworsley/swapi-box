import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme'

describe('APP TEST - ON LOAD', () => {
  it('should render a nav, a sidebar, and a card container on load', () =>{

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
