/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj; // conditions object
var fObj; // forecast object

// GET THE CONDITIONS
weatherConditions.open('GET', '//api.openweathermap.org/data/2.5/weather?zip=97005,us&appid={removedAPI}&units=imperial', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj);
        document.getElementById('location').innerHTML = cObj.name; // display city name
        document.getElementById('weather').innerHTML = cObj.weather[0].description; // display weather description
        document.getElementById('temperature').innerHTML = cObj.main.temp; // display temperature        document.getElementById('temperature').innerHTML = cObj.main.temp; // display temperature
        document.getElementById('desc').innerHTML = "Wind Speed: " + cObj.wind.speed; // display wind speed
    } //end if
}; //end function



// GET THE FORECARST
weatherForecast.open('GET', '//api.openweathermap.org/data/2.5/forecast?zip=97005,us&appid={removedAPI}&units=imperial', true);
weatherForecast.responseType = 'text'; 
weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);

// Day 1:
    var date_raw = fObj.list[0].dt_txt; // extract date
    date_raw = date_raw.substring(5,11); // just take mm-dd from date
	document.getElementById('r1c1').innerHTML = date_raw; // display date

    // build dynamic img url and display
    var iconcode = fObj.list[0].weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('r1c2').src = icon_path;

    document.getElementById('r1c3').innerHTML = fObj.list[0].main.temp_min + "&deg";
    document.getElementById('r1c4').innerHTML = fObj.list[0].main.temp_max + "&deg";

 // Day 2: starts at array item 8
    var date_raw = fObj.list[8].dt_txt; // extract date
    date_raw = date_raw.substring(5,11); // just take mm-dd from date
	document.getElementById('r2c1').innerHTML = date_raw; // display date

    // build dynamic img url and display
    var iconcode = fObj.list[8].weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('r2c2').src = icon_path;

    document.getElementById('r2c3').innerHTML = fObj.list[8].main.temp_min + "&deg";
    document.getElementById('r2c4').innerHTML = fObj.list[8].main.temp_max + "&deg";

// Day 3: starts at array item 16
var date_raw = fObj.list[16].dt_txt; // extract date
    date_raw = date_raw.substring(5,11); // just take mm-dd from date
	document.getElementById('r3c1').innerHTML = date_raw; // display date

    // build dynamic img url and display
    var iconcode = fObj.list[16].weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('r3c2').src = icon_path;

    document.getElementById('r3c3').innerHTML = fObj.list[16].main.temp_min + "&deg";
    document.getElementById('r3c4').innerHTML = fObj.list[16].main.temp_max + "&deg";

} //end if
}; //end function


