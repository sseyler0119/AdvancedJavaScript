import $ from 'jquery';

export class BaseElement {

    constructor() {
        this.element = null; // jQuery object
    }

    appendToElement(el) {
        this.createElement();
        el.append(this.element);
        this.enableJS(); // call enableJS
    }

    createElement() {
        let s = this.getElementString();
        //console.log(s); // debugging
        this.element = $(s);
    }

    getElementString() {
        throw 'Please override getElementString() in BaseElement';
    }

    // enable JS on the object
    enableJS() {
        //console.log(this.element[0]); // debugging
        componentHandler.upgradeElement(this.element[0]);
    }
}