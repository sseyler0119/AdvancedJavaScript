/* Declaring strict mode 
This can be used at the beginning of the JS script in which case
    it has global scope, or if placed inside of a function, it will be local to the function
    variables must be declared in strict mode, cannot use x = 5; */
// "use strict"; // this would apply globaly

// inside of a function
pi = 3.14; // won't throw an error
strictMode();

function strictMode() {
    "use strict";
    //y = 3.14; // this throws an error
}


// bitwise variables
let x = 6 & 4; // and 
let y = 6 | 4; // or 
let z = 6 ^ 4; // xor

// x = "staple"; // will throw an error, variables declared with let cannot be redeclared

// display bitwise output
document.getElementById("and").innerHTML = x;
document.getElementById("or").innerHTML = y;
document.getElementById("xor").innerHTML = z;

/* Search and Replace:
syntax: /pattern/modifiers;

/w3schools/i  is a regular expression.
w3schools  is a pattern (to be used in a search).
i  is a modifier (modifies the search to be case-insensitive).



*/

let statement = "I love Python!";
let searchStr = statement.search(/love/i);
let change = statement.replace(/python/i,'JavaScript');

// output search/replace
document.getElementById("search").innerHTML = "love found at position: "+ searchStr;
document.getElementById("replace").innerHTML = change;


/* JS Errors challenge */ 
function errorHandling() {
    const message = document.getElementById("response");
    message.innerHTML="";
    let x = document.getElementById("error").value;

    try {
        if(x.trim() == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
    finally {
        document.getElementById("error").value = "";
    }
}

/* this keyword */

const doggo = {
    name: "Layla",
    owner: "Serena",
    id: 462,
    phone: "555-555-5555",
    contact: function() {
        return this.name + " belongs to " + this.owner + 
            ". Please help her get home, call : " + this.phone; 
    }
};

document.getElementById("this").innerHTML = doggo.contact();

/* arrow functions */
hello = () => {
    return "Hello, World!";
}

// arrow functions with a single statement can remove the { }
oneLine = () => "all in One single line!"; // this is a function

// with parameters
val = "Michael";
withParam = (val) => "Hello " + val; // also works without () around val

document.getElementById("hello").innerHTML = hello();
document.getElementById("oneLine").innerHTML = oneLine();
document.getElementById("withParam").innerHTML = withParam(val);

/* this and arrow functions:
1) regular functions: this represents the object fo the function (window, the document, button, etc)
2) with arrow functions: this always represents the object that defined the arrow function */

// example 1: regular function
regFunc = function () {
    document.getElementById("regular").innerHTML += this;
}

// window calls the function
//window.addEventListener("load", regFunc); // this belongs to [object window]

// button calls the function 
document.getElementById("btn1").addEventListener("click", regFunc); // this belongs to [object HTMLButtonElement]

// example 2: using an arrow function
arrowFunc = () => {
    document.getElementById("arrow").innerHTML += this;
}

// window calls the function
window.addEventListener("load", arrowFunc); // this belongs to [object window]

// button calls the function 
document.getElementById("btn2").addEventListener("click", arrowFunc); // this belongs to [object window]


class PoorlyPlacedClass {
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }
}

let shame = new PoorlyPlacedClass("Serena", " do better!");
document.getElementById("class1").innerHTML = shame.name + " " + shame.message;


// debugger
let broken = 15 * 6;
//debugger;
document.getElementById("broken").innerHTML = broken;

// findIndex()
const names = ["John", "Susan", "Marcy"];
let first = names.findIndex(nameFinder);

function nameFinder(value, index, array) {
    return value == "Susan";
}

document.getElementById("index").innerHTML = "Susan is located at index: " + first;

// Number.isInteger()
document.getElementById("isInt").innerHTML = "Is 10 an integer? " + Number.isInteger(10);

// isFinite()
document.getElementById("finite").innerHTML = "Is 10/0 a finite value? " + isFinite(10/0);

// exponentiation operator (**)
document.getElementById("exp").innerHTML = " 5 raised to the power of 5 is: " + 5**5;

// form validation
function validateForm() {
    let x = document.forms["formTest"]["fname"].value;
    if(x == "") {
        alert("Form must be filled out");
        return false;
    }
}

function isValid() {
    const message = document.getElementById("valid");
    if(!message.checkValidity()) {
        document.getElementById('respMessage').innerHTML = message.validationMessage;
    } 
    else {
        document.getElementById('respMessage').innerHTML = "Valid Input Received";
    }
}

