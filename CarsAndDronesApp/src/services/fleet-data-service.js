import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {DataError} from './data-error.js';

export class FleetDataService 
{
    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = []; // array to store errors
    }

    loadData(fleet) {
        for (let data of fleet) {
            switch(data.type) {
                case 'car':
                    if(this.validateCarData(data)) {
                        let car = this.loadCar(data); // instantiate car object
                        if(car) // if no errors, then push car object on to cars array
                            this.cars.push(car);
                    }
                    else { //log error
                        let e = new DataError('invalid car data', data);
                        this.push.errors(e);
                    }
                    break;
                case 'drone':
                    if(this.validateDroneData(data)){
                        let drone = this.loadDrone(data); // instantiate drone object
                        if(drone) // if no errors, push drone object on to drones array
                            this.drones.push(drone);
                    }
                    else { // log error
                        let e = new DataError('invalid drone data', data);
                        console.log(e);
                        this.push.errors(e);
                    }
                    break;
                default: // invalid vehicle type
                    let e = new DataError('Invalid vehicle type', data);
                    this.errors.push(e);
                    break;
            } // end switch
        } // end for
    }

    // instantiate car object with data
    loadCar(car) {
        try {
            let c = new Car(car.license, car.model, car.latLong);
            c.miles = car.miles;
            c.make = car.make;
            return c;
        }
        catch(car) {
            this.errors.push(new DataError('error loading car', car));
        }
        return null;
    }

    // instantiate drone object with data
    loadDrone(drone) {
        try {
            let d = new Drone(drone.license, drone.model, drone.latLong);
            d.airTimeHours = drone.airTimeHours;
            d.base = drone.base;
            console.log("data: "+ d.latLong + " " + d.airTimeHours);
            return d;
        }
        catch(drone) {
            this.errors.push(new DataError('error loading drone', drone));
        }
        return null;
    }
    
    /************** DATA VALIDATION FUNCTIONS *****************/ 
    // validate car data
    validateCarData(car) {
        // create list of required properties, store as array split by ' '
        let requiredProps = 'license model latLong miles make'.split(' '); 
        let hasErrors = false;

        // loop through required properties
        for(let field of requiredProps) {
            if(!car[field]) {
                this.errors.push(new DataError(`invalid field ${field}`, car));
                hasErrors = true;
            }
        }
        // verify if miles is a number
        if(Number.isNaN(Number.parseFloat(car.miles))) {
            this.errors.push(new DataError('invalid mileage', car));
            hasErrors = true;
        }
        return !hasErrors;
    }

    // validate drone data
    validateDroneData(drone) {
        // create list of required properties, store as array split by ' '
        let requiredProps = 'license model latLong airTimeHours base'.split(' '); 
        let hasErrors = false;

        // loop through required properties
        for(let field of requiredProps) {
            if(!drone[field]) {
                this.errors.push(new DataError(`invalid field ${field}`, drone));
                hasErrors = true;
            }
        }
        // verify if miles is a number
        if(Number.isNaN(Number.parseFloat(drone.airTimeHours))) {
            this.errors.push(new DataError('invalid Air Time Hours', drone));
            hasErrors = true;
        }
        return !hasErrors;
    }

    // get car by license
    getCarByLicense(license) {
        return this.cars.find(function(car) {
            return car.license === license;
        });
    }
    
    // sort cars by license
    getCarsSortedByLicense(){
        return this.cars.sort(function(car1, car2) {
            if(car1.license < car2.license)
                return -1;
            if(car1.license > car2.license)
                return 1;
            return 0;        
        });
    }

    filterCarsByMake(filter) {
        return this.cars.filter(car => car.make.indexOf(filter) >= 0);
    }
}