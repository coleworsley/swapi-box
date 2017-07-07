import React from 'react';
import Sidebar from './Sidebar';
import { shallow, mount } from 'enzyme'
import { filmMock } from '../../Helpers/MockData/filmMock'
import fetchMock from 'fetch-mock'

describe('SIDEBAR TEST - ALL', () => {
  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }




  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  })

  it('should display an error when it doesnt get the stuff', async () => {
    fetchMock.get('https://swapi.co/api/films', {
      status: 500,
      body: filmMock,
    });

    const wrapper = mount(<Sidebar/>);
    await resolveAfter2Seconds();

    expect(fetchMock.called()).toEqual(true);
    expect(wrapper.state().films.allFilms.length).toEqual(2);
  });










  // console.log(wrapper.debug())


  it('should make API call', () =>{

  })

  it('should contain scrolling text', () =>{

  })

  it('should contain state', () =>{

  })

});
