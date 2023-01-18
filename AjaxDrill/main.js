/**
 * NOTE: in order to run the XMLHttpRequest without CORS errors, you must install lite-server
 * after creating project folder, run:  npm init -y (from inside project directory)
 * Then run: npm install lite-server --save-dev
 * Modify package.json: add this line to scripts: "start": "lite-server" (this allows us to run the server with npm start)
 */



function changeContent() {
    let url=""
    // create an XMLHttpRequest object
    const xmlObj = new XMLHttpRequest();

    // define a callback function
    xmlObj.onload = function () {
        document.getElementById("ajax").innerHTML = this.responseText;
    }

    // open the XMLHttpRequest object
    xmlObj.open("GET", 'change.txt', true);

    // send a request to a server
    xmlObj.send();
}

// parse data with JSON
const parser = new XMLHttpRequest();
parser.onload = function() {
  const supplies = JSON.parse(this.responseText);
  document.getElementById("parse").innerHTML = supplies[2];
}
parser.open("GET", "data.json", true);
parser.send();