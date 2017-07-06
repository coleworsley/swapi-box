import './App.css';
import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import CardContainer from '../CardContainer/CardContainer'
import Nav from '../Nav/Nav'
import PeopleFetch from '../../Helpers/People/PeopleFetch';
import PlanetsFetch from '../../Helpers/Planets/PlanetsFetch';
import VehiclesFetch from '../../Helpers/Vehicles/VehiclesFetch';


class App extends Component {
  constructor() {
    super()
    this.state = {
      films: {},
      people: {},
      planets: {},
      vehicles: {},
      active: 'planets',
    }
  }

  getData(input) {
    switch(input.target.textContent) {
      case 'Planets':
        var apiCall = new PlanetsFetch();
        apiCall.getPlanets(this)
        break;
      case 'People':
        var apiCall = new PeopleFetch();
        apiCall.getPeople(this)
        break;
      case 'Vehicles':
        var apiCall = new VehiclesFetch();
        apiCall.getVehicles(this)
        break;
      default:
        break;
    }
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
