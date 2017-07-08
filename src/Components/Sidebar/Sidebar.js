import React, { Component } from 'react'
import './Sidebar.css'

const toRoman = (num) => {
  let result = '';
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (let i = 0; i <= decimal.length; i++) {
    while (num % decimal[i] < num) {
      result += roman[i];
      num -= decimal[i];
    }
  }
  return result;
}

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      films: {}
    };
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
        filmIndex: Math.floor(Math.random() * (result.count)),
      });
    });
  }

  scrollingText() {
    const { films: { allFilms }, filmIndex } = this.state;

    if (!allFilms) return <div className='load-films'>Loading</div>

    const currentFilm = allFilms[filmIndex];

    return (
      <div className='crawl'>
        <div className="scroll-title">
          <h3>Episode {toRoman(currentFilm.episode_id)}</h3>
          <h1>{currentFilm.title}</h1>
        </div>
        <p>{currentFilm.opening_crawl}</p>
      </div>
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
