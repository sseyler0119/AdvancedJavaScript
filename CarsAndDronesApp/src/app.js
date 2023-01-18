import $ from 'jquery';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './home-page.js';
import {CarsPage} from './cars-page.js';
import {DronesPage} from './drones-page.js';
import {MapPage} from './map-page.js';

export class App extends ApplicationBase {
    constructor() {
        super('Fleet Manager'); // pass title
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);

        // url routes
        this.addRoute('Home', new HomePage(), true); // true defines this as the default route
        this.addRoute('Cars', new CarsPage()); 
        this.addRoute('Drones', new DronesPage()); 
        this.addRoute('Map', new MapPage()); 
    }
}

export let application = new App();
application.show($('body'));

