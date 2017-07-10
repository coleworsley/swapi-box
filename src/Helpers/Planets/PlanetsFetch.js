import Planet from './Planet';

export default class PlanetsFetch {
  constructor() {
    this.url = `https://www.swapi.co/api/planets/`;
  }

  getPlanets(component) {
    component.setState({ loading: true, active: 'planets' })
    fetch(this.url)
      .then(response => response.json())
      .then(planets => this.getNestedData(planets))
      .then(planets => {
        component.setState({ planets, loading: false })
        localStorage.setItem('planets', JSON.stringify(planets))
      })
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
          return new Planet (planet, data[i])
        })
      })
  }
}
