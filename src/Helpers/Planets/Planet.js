export default class Planet {
  constructor(planetObj, residents) {
    this.name = planetObj.name;
    this.terrain = planetObj.terrain;
    this.population = planetObj.population;
    this.climate = planetObj.climate;
    this.residents = residents.map(resident => resident.name);
    this.favorite = false;
    console.log(this);
  }
}
