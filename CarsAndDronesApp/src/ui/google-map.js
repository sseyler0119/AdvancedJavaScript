import {BaseElement} from './base-element.js';

export class GoogleMap extends BaseElement {

    // button title
    constructor(centerOfMap, data) {
        super();
        this.centerOfMap = centerOfMap;
        this.data = data;
    }

    createElement() {
        super.createElement(); 
        // called after the DOM is created
        setTimeout(() => {
            let map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: this.centerOfMap
            });
            
            for(let vehicle of this.data) {
                let [lat, long] = vehicle.latLong.split(' ');
                console.log('lat:' + lat); // for debugging purposes
                let myLatLng = new window.google.maps.LatLng(lat, long);
                // create map marker
                let marker = new window.google.maps.Marker({
                    position: myLatLng,
                    map: map
                });
            }
        }, 0);
    }

    // override getElementString
    getElementString() {
        // note html comments will throw an error when reading from element
        return `
            <div style="width:800px; height: 400px;" id="map"></div>
        `;
    }
}
