// use https://www.accuweather.com/en/ca/mississauga/l5b/driving-weather/55071 
// Get location tag -> get conditions for the location
var config = require('./config.js'); // to get api key
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
function getKey(city){
    
}
console.log(GetRequest("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=mississauga&apikey=BcCBaMXpYbSrOLffjp41GB7Zz34riCQA"));




function GetRequest(url){ // function GETS the json from the URL and returns it 
    xhr.open('GET',url,true);
    xhr.send();
    return(JSON.parse(xhr.responseText));
}
// http://dataservice.accuweather.com/locations/v1/cities/autocomplete
//xhr.open('GET',"http://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=mississauga&apikey=BcCBaMXpYbSrOLffjp41GB7Zz34riCQA",true);
//xhr.send();



//console.log(config.key);