import {BaseElement} from './base-element.js';

export class Image extends BaseElement {

    // image filename
    constructor(fileName) {
        super();
        this.fileName = fileName;
    }

    // override getElementString
    getElementString() {
        return `
        <img src="${this.fileName}" style="width: 100%;" />
        `;
    }
}