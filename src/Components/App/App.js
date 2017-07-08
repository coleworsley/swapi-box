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
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      active: 'loading',
      loading: false,
    }
  }

  getData(input) {
    switch(input.target.textContent) {
      case 'Planets':
        if (this.state.planets.length) {
          this.setState({active: 'planets'})
          break
        }
        var apiCall = new PlanetsFetch();
        apiCall.getPlanets(this)
        break;
      case 'People':
        if (this.state.people.length) {
          this.setState({active: 'people'})
          break
        }
        var apiCall = new PeopleFetch();
        apiCall.getPeople(this)
        break;
      case 'Vehicles':
        if (this.state.vehicles.length) {
          this.setState({active: 'vehicles'})
          break
        }
        var apiCall = new VehiclesFetch();
        apiCall.getVehicles(this)
        break;
      case 'Favorites':
        this.setState({active: 'favorites'})
        break
      default:
        break;
    }
  }

  toggleFavorite(e) {
      let newFavorites = Object.assign([], this.state.favorites);
      const currentData = this.state[this.state.active];
      const dataToPush = currentData.find(elem => elem.name === e.target.parentNode.id)
      if (newFavorites.includes(dataToPush)) {
        newFavorites = newFavorites.filter(elem => elem.name !== dataToPush.name)
      } else {
        newFavorites.push(dataToPush);
      }
      this.setState({ favorites: newFavorites });
    }

  render() {
    const cardData = this.state.active
    return (
      <div className="app">
        <Sidebar films={this.state.films}/>
        <main>
          <Nav getData={this.getData.bind(this)}
               activeCard={cardData}/>
          <CardContainer cardData={this.state[cardData]}
                         toggleFavorite={this.toggleFavorite.bind(this)}/>
        </main>
      </div>
    );
  }
}

export default App;
