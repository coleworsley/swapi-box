import React from 'react';
import Sidebar from './Sidebar';
import { shallow, mount } from 'enzyme'
import fetchMock from 'fetch-mock'

describe('SIDEBAR TEST - ALL', () => {

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
})

const stub = {count: 1,
  results: [{episode_id: 4, opening_crawl: 'TEST TEST TEST', title: 'TEST TITLE TEST'}]
}

  it('submits the correct data to the server', async () => {
    fetchMock.post('https://swapi.co/api/films', {
      status: 200,
      body: stub,
    })
    const wrapper = mount(<Sidebar/>);
    await wrapper.update()
  })

  // console.log(wrapper.debug())


  it('should make API call', () =>{

  })

  it('should contain scrolling text', () =>{

  })

  it('should contain state', () =>{

  })

});
