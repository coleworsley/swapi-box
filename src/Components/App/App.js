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
      active: 'people',
    }
  }

  componentDidMount() {

  }

// TODO: Clean up code / rename
  getData(input) {
    // const apiCall = new PeopleFetch();
    // apiCall.getPeople(this)
    const apiCall = new VehiclesFetch();
    apiCall.getVehicles(this)



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
