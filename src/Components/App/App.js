import './App.css';
import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import CardContainer from '../CardContainer/CardContainer'
import Nav from '../Nav/Nav'
import PeopleFetch from '../../Helpers/People/PeopleFetch';
import PlanetsFetch from '../../Helpers/Planets/PlanetsFetch';

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: {},
      people: {},
      planets: {},
      vehicles: {},
      active: 'people',
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

// TODO: Clean up code / rename
  getData(input) {
    // const apiCall = new PeopleFetch();
    // apiCall.getPeople(this)
    const apiCall = new PlanetsFetch();
    apiCall.getPlanets(this)



  }

  toggleActive(tab) {
    this.setState({active: tab})
  }


  render() {
    const cardData = this.state.active
    return (
      <div className="app">
        <Sidebar films={this.state.films}/>
        <main>
          <Nav getData={this.getData.bind(this)}/>
          <CardContainer cardData={this.state[cardData]}/>
        </main>
      </div>
    );
  }
}

export default App;
