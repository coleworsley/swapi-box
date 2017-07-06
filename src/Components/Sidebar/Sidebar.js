import React, { Component } from 'react'
import './Sidebar.css'

export default class Sidebar extends Component {
  constructor() {
    super()

    this.state = {
      films: {}
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/films';
    fetch(url)
      .then(response => response.json())
      .then(result => {
      this.setState({
        films: {
          count: result.count,
          allFilms: result.results,
        },
        filmIndex: Math.floor(Math.random()*( result.count ))
      });
    });
  }

   scrollingText() {
    const { films, filmIndex } = this.state;
    if (!films.allFilms) return <div className='load-films'>Loading</div>
    return (
      <p>
        films.allFilms[filmIndex].opening_crawl
      </p>
    );
  }
  render() {
    return (
      <aside className='side-bar'>
        <h1 className='title'>SWAPI-BOX</h1>
        <div className='scroll'>{this.scrollingText()}</div>
      </aside>
    )
  }
}
