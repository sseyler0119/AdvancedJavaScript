export class Vehicle
{
    // base constructor with fields common to both cars and drones
    constructor(license, model, latLong) {
        this.license = license;
        this.model = model;
        this.latLong = latLong;
    }
}