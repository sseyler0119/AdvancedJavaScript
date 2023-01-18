// JavaScript Document
var start = '{"favColor":"Purple", "favSeason":"Fall"}';

var myObject = JSON.parse(start);
console.log(myObject);

var myString = JSON.stringify(myObject);
console.log(myString);

myObject = JSON.parse(myString);
console.log(myObject);

var theData1 = '{"first":"Paul", "last":"Cheney","city":"Salem"}';
var myObj = JSON.parse(theData1);
console.log(myObj);
//document.getElementById("message").innerHTML = myObj.last;

var theData2 = '{"Jane":{"age":"29", "degree":{"AA":"DVC", "BA":"PSU"}}, "Jim":{"age":"49", "degree":"MA"}}';
var myObj2 = JSON.parse(theData2);
console.log(myObj2);
document.getElementById("message").innerHTML = myObj2.Jane.degree.BA;

// parse data from file
var xhr = new XMLHttpRequest(); 
// open sets the parameters
xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';

xhr.onreadystatechange = function () {
    console.log(xhr.readyState); //onload function runs when ready state = 4
    console.log(xhr.status); // status must be 200 or the file hasn't loaded correctly
    console.log(xhr.statusText);
} // end function

// parse the data
xhr.onload = function () {
    if(xhr.status === 200) {
        var myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff);
    }
    
}// end function

xhr.send(); // send actually initates the open request

