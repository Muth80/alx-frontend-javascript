// 100-evcar.js

import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(); // Call the constructor of the parent class (Car)
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    // Create a new Car object with the same attributes as the current EVCar object
    const newCar = new Car();
    newCar._brand = this._brand;
    newCar._motor = this._motor;
    newCar._color = this._color;
    newCar._range = this._range;
    return newCar;
  }
}
