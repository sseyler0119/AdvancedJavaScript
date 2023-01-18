// function to perform a get request
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

// function to get a random image
function getRandomImage()
{
  // get the json from the server
  var json = httpGet('https://dog.ceo/api/breeds/image/random');
  console.log(json);

  // decode the json into an array
  var array = JSON.parse(json);
  console.log(array);
  
  // get the image url from the array
  var url = array.message;
  console.log(url);
  
  // get the image object
  var image = document.getElementById('doggo');
  
  // set the src of the image object
  image.src = url;
}




/* 
function loadJSON() {
    var data_file = "https://dog.ceo/api/breeds/image/random";
    var http_request = new XMLHttpRequest();

    try {
         // Opera 8.0+, Firefox, Chrome, Safari
         http_request = new XMLHttpRequest();
    }
    catch (e) {
        // Internet Explorer Browsers
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                // somethign went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }

    http_request.onreadystatechange = function () {
        if(http_request.readyState == 4) {
            // Javascript function JSON.parse to parse JSON data
            var jsonObj = JSON.parse(http_request.responseText);

            // jsonObj variable now contains the data structure and can be accessed as jsonObj.activity
            console.log(jsonObj.message);
            document.getElementById("doggo").src = jsonObj.message;
        }
    }
} */