import Person from './Person';

export default class PeopleFetch {
  constructor(){
    this.url = `https://swapi.co/api/people/`;
  }

  getPeople(component) {
    component.setState({ loading: true, active: 'people' })
    fetch(this.url)
      .then(response => response.json())
      .then(people => this.getNestedData(people))
      .then(people => {
        component.setState({ people, loading: false })
        localStorage.setItem('people', JSON.stringify(people))
      })
  }

  getNestedData(people) {
    const homeworldData = people.results.map(e => {
      return fetch(e.homeworld).then(response => response.json())
    });

    const speciesData = people.results.map(e => {
      return fetch(e.species[0]).then(response => response.json())
    });

    return Promise.all([...homeworldData, ...speciesData])
      .then(data => {

        return people.results.map((person, i) => {
          const homeworld = data[i];
          const species = data[i + people.results.length];
          return new Person (
            person.name,
            homeworld.name,
            species.name,
            species.language,
            homeworld.population
          )
        })
      })
  }
}
