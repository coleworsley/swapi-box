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
    if (!this.state.films.allFilms) {
      return "Loading"
    }
    return this.state.films.allFilms[this.state.filmIndex].opening_crawl;
  }
  render() {
    return (
      <aside className="side-bar">
        <h1>SWAPI-BOX</h1>
        <div>{this.scrollingText()}</div>
      </aside>
    )
  }
}
