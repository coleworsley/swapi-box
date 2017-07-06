import Planet from './Planet';

export default class PlanetsFetch {
  constructor() {
    this.url = `https://swapi.co/api/planets/`;
  }

  getPlanets(component) {
    fetch(this.url)
      .then(response => response.json())
      .then(planets => this.getNestedData(planets))
      .then(planets => component.setState({ planets }))
  }

  getNestedData(planets) {
    const residents = planets.results.map(e => {
      return Promise.all(e.residents.map(resident => {
        return fetch(resident).then(response => response.json());
      }));
    });

    return Promise.all(residents)
      .then(data => {

        return planets.results.map((planet, i) => {
          const resident = data[i];
          return new Planet (planet, data[i])
        })
      })
  }
}
