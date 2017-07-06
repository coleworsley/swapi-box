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
    input = input.target.textContent.toLowerCase();

    // switch input to preset fields;
    const url = `https://swapi.co/api/${input}/`;
    this.toggleActive(input)

    fetch(url)
    .then(response => response.json())
    .then(peopleData => {

      const homeworldData = peopleData.results.map(e => fetch(e.homeworld));
      const speciesData = peopleData.results.map(e => fetch(e.species));

      Promise.all([...homeworldData, ...speciesData])
        .then(response => {
          return Promise.all(response.map(e => e.json()));
        })
       .then(data => {

        const arr = peopleData.results.map((e, i) => {
          e.homeworld = data[i];

          e.species = data[i + peopleData.results.length];
          return e;
        })

         this.setState({
             people: arr,

          });
        });
    });

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
