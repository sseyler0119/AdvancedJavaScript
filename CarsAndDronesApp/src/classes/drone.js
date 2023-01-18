import {Vehicle} from './vehicle.js';

export class Drone extends Vehicle 
{
    constructor(license, model, latLong) {
        super(license, model, latLong); // call base constructor
        this.airTimeHours = null;
        this.base = null;
    }
}