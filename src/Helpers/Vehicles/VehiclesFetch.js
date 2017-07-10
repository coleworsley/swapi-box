import Vehicle from './Vehicle';

export default class VehicleFetch {
  constructor() {
    this.url = `https://swapi.co/api/starships/`
  }
  getVehicles(component) {
    component.setState({ loading: true, active: 'vehicles' })
    fetch(this.url)
      .then(blob => blob.json())
      .then(vehicleArray => vehicleArray.results.map((element) => {
        return new Vehicle(element)
      }))
      .then(vehicles => {
        component.setState({ vehicles, loading: false })
        localStorage.setItem('vehicles', JSON.stringify(vehicles))
      })
  }


}
