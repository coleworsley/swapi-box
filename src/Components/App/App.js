import './App.css';
import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import CardContainer from '../CardContainer/CardContainer'
import Nav from '../Nav/Nav'
import PeopleFetch from '../../Helpers/People/PeopleFetch';
import PlanetsFetch from '../../Helpers/Planets/PlanetsFetch';
import VehiclesFetch from '../../Helpers/Vehicles/VehiclesFetch';
import { loadFromLocal } from '../../Helpers/loadFromLocal'


class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      active: '',
      loading: false,
    }
  }

  componentDidMount() {
    loadFromLocal(this);
  }

  getData(input) {
    switch(input.target.textContent) {
      case 'Planets':
        if (this.state.planets.length) {
          this.setState({active: 'planets'})
          break
        }
        const planetsFetch = new PlanetsFetch();
        planetsFetch.getPlanets(this)
        break;
      case 'People':
        if (this.state.people.length) {
          this.setState({active: 'people'})
          break
        }
        const peopleFetch = new PeopleFetch();
        peopleFetch.getPeople(this)
        break;
      case 'Vehicles':
        if (this.state.vehicles.length) {
          this.setState({active: 'vehicles'})
          break
        }
        const vehiclesFetch = new VehiclesFetch();
        vehiclesFetch.getVehicles(this)
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
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
    } else {
      newFavorites.push(dataToPush);
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
    }
    this.setState({
      favorites: newFavorites,
    });
  }



  render() {
    const cardData = this.state.active
    return (
      <div className="app">
        <Nav getData={this.getData.bind(this)}
             activeCard={cardData}/>
        <main>
          <Sidebar films={this.state.films}/>
          <CardContainer cardData={this.state[cardData] || []}
                         favoritesArray={this.state.favorites}
                         toggleFavorite={this.toggleFavorite.bind(this)}
                         active={cardData}
                         loading={this.state.loading}/>
        </main>
      </div>
    );
  }
}

export default App;
