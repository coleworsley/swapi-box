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

// TODO: Clean up code / rename
  getData(input) {
    const url = `https://swapi.co/api/${input}/`;

    fetch(url)
    .then(response => response.json())
    .then(peopleData => {
      const personData = peopleData.results.map(e => fetch(e.homeworld));
      Promise.all(personData)
        .then(response => {
          return Promise.all(response.map(e => e.json()))
         })
         .then(homeworld => {
          const arr = peopleData.results.map((e, i) => {
            e.homeworld = homeworld[i]
            return e;
          })

           this.setState({
             people: {
               peopleData: arr,
               homeworld,
             }
           });
         });
    });

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
