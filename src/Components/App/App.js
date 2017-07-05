import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar'


class App extends Component {
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
    .then(result => this.setState({
      films: {
        count: result.count,
        allFilms: result.results,
      }
    }))
  }

  render() {
    return (
      <div className="app">
        <Sidebar films={this.state.films}/>

      </div>
    );
  }
}

export default App;
