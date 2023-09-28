// Check if your JavaScript runtime has the support for ECMAScript 2015 / ES6 features
import Building from './5-building.js';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // assign sqft to the parent class Building
    this._floors = floors; // store floors in an "underscore" version
  }

  // getter for sqft
  get sqft() {
    return this._sqft;
  }

  // getter for floors
  get floors() {
    return this._floors;
  }

  // override method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}

export default SkyHighBuilding;
