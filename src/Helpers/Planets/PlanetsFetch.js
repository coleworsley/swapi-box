import Person from './Person';

export default class PeopleFetch {
  constructor(){
    this.url = `https://swapi.co/api/people/`;
  }

  getPeople(component) {
    fetch(this.url)
      .then(response => response.json())
      .then(people => this.getNestedData(people))
      .then(people => component.setState({ people }))
  }

  getNestedData(people) {
    const homeworldData = people.results.map(e => {
      return fetch(e.homeworld).then(response => response.json())
    });

    const speciesData = people.results.map(e => {
      return fetch(e.species).then(response => response.json())
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
