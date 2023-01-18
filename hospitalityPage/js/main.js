// JavaScript Document
var hotelInfo;
var details;
var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function() {
    if(xhr.status === 200) {
        hotelInfo = JSON.parse(xhr.responseText);
        console.log(hotelInfo);
        display(0); // display first entry, Southern Seranade by default
    } // end if
} // end function

// display the data
function display(x) {
    console.log(x);
    document.getElementById('roomName').innerHTML = hotelInfo[x].name; // display name
    document.getElementById('desc').innerHTML = hotelInfo[x].description; // display room description
    document.getElementById('photo').src = hotelInfo[x].photo; // display photo
    document.getElementById('weekday').innerHTML = hotelInfo[x].cost.weekday; // display weekday cost
    document.getElementById('weekend').innerHTML = hotelInfo[x].cost.weekend; // display weekend cost
    
    details = "";
    // iterate through details array, display each entry in a paragraph tag
    for(i = 0; i < hotelInfo[x].details.length; i++) {
        console.log(hotelInfo[x].details[i]);
        details += "<p>" + hotelInfo[x].details[i] + "</p>";
        document.getElementById('details').innerHTML = details; // display details list
    }
    

}// end function