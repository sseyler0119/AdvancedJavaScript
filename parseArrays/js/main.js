// JavaScript Document

var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function() {
    if(xhr.status === 200){
        var myStuff = JSON.parse(xhr.response);
        console.log(myStuff);
        for(i = 0; i < myStuff.presidents.length; i++) {
            console.log(myStuff.presidents[i].first);
            console.log(myStuff.presidents[i].last);
            console.log(myStuff.presidents[i].served);

            console.log(myStuff.vicepresidents[i].first);
            console.log(myStuff.vicepresidents[i].last);
        } // end for loop
        
        var myString= "";
        for(i = 0; i < myStuff.presidents.length; i++) {
            var x= i + 1;
            myString += "<br>President " + x + " was ";
            myString += myStuff.presidents[i].first + " ";
            myString += myStuff.presidents[i].last + ". ";

            myString += "He served from " + myStuff.presidents[i].served + " with ";
            myString += myStuff.vicepresidents[i].first + " ";
            myString += myStuff.vicepresidents[i].last + " ";
        } // end for loop
        
        document.getElementById("message").innerHTML = myString;
    } // end if
} // end function
