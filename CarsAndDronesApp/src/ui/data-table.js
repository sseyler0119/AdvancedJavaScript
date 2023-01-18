import {BaseElement} from './base-element.js';

export class DataTable extends BaseElement {

    // button title
    constructor(headers, data) {
        super();
        this.headers = headers;
        this.data = data;
    }

    // override getElementString
    getElementString() {
        let thTags = '';
        for(let h of this.headers) {
            thTags += `<th class="mdl-data-table__cell--non-numeric">${h}</th>\n`
        }
        let trTags = '';
        // build each row
        for(let row of this.data) {
            trTags += `<tr>`;
            let tdTags = '';
            for (let property of this.headers) {
                let field = row[property.toLowerCase()];
                trTags += `<td class="mdl-data-table__cell--non-numeric">
                            ${field}
                            </td>
                            `;
            }
        }
        // note html comments will throw an error when reading from element
        return `
        <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
           ${thTags}
          </tr>
        </thead>
        <tbody>
          ${trTags}
        </tbody>
      </table>
      
        `;
    }
}
