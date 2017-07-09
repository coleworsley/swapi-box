import React from 'react';
import Sidebar from './Sidebar';
import { shallow, mount } from 'enzyme'
import { mockFilms } from '../../Helpers/MockData'
import fetchMock from 'fetch-mock'

describe('SIDEBAR TEST - ALL', () => {
  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  beforeEach(() => {
    fetchMock.get('https://swapi.co/api/films/', {
      status: 200,
      body: mockFilms,
    })
  });

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  })

  it('should make an API call on mount', async () => {

    const wrapper = mount(<Sidebar/>);
    // await wrapper.update() DOESN'T WORK
    await resolveAfter2Seconds(); // WORKS

    expect(fetchMock.called()).toEqual(true);
    expect(wrapper.state().films.allFilms.length).toEqual(2);
  });


  it('should contain scrolling text', async () =>{
    const wrapper = mount(<Sidebar/>);
    await resolveAfter2Seconds();
    const text = wrapper.find('.scroll-title')
    expect(text).toHaveLength(1)

  })

  it('should contain state', async () =>{
    const wrapper = mount(<Sidebar/>)
    await resolveAfter2Seconds();
    expect(wrapper.state().films.allFilms).toHaveLength(2)

  })

});
