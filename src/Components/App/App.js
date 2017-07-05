import './App.css';
import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import CardContainer from '../CardContainer/CardContainer'
import Nav from '../Nav/Nav'


class App extends Component {
  constructor() {
    super()
    this.state = {
      films: {},
      people: {},
      planets: {},
      vehicles: {},
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
        }
      });
    });
  }

  getData(input) {
    const url = `https://swapi.co/api/${input}/`;
    console.log(input);
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        [input]: data
      })
    })
  }


  render() {
    return (
      <div className="app">
        <Sidebar films={this.state.films}/>
        <main>
          <Nav getData={this.getData.bind(this)}/>
          <CardContainer/>
        </main>
      </div>
    );
  }
}

export default App;
