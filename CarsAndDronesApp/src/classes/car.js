import {Vehicle} from './vehicle.js';

export class Car extends Vehicle
{
    constructor(license, model, latLong) {
        super(license, model, latLong); // call base constructor
        this.miles = null;
        this.make = null;
    }
}