import Vehicle from './Vehicle';

export default class VehicleFetch {
  constructor() {
    this.url = `https://swapi.co/api/starships/`
  }
  getVehicles(component) {
    fetch(this.url)
      .then(blob => blob.json())
      .then(vehicleArray => vehicleArray.results.map((element) => {
        return new Vehicle(element)
      })).then(vehicleArray => {
        component.setState({vehicles: vehicleArray})
      })
  }


}
