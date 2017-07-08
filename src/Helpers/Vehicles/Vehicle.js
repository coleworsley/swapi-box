export default class Vehicle {
  constructor(vehicleObj) {
    this.name = vehicleObj.name;
    this.model = vehicleObj.model;
    this.classification = vehicleObj.starship_class;
    this.passengers = vehicleObj.passengers;
    this.favorite = false;
  }
}
