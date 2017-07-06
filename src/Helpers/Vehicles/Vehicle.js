export default class Vehicle {
  constructor(vehicleObj) {
    this.name = vehicleObj.name;
    this.model = vehicleObj.model;
    this.vehicleClass = vehicleObj.vehicle_class;
    this.passengers = vehicleObj.passengers;
    this.favorite = false;
  }
}
