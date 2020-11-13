const request = require('request');
//api one for darksky
const url = 'https://api.darksky.net/forecast/bb13fcfd5bc9eab6d0ea066e583ac4bf/37.8267,-122.4233';
request({url : url,json:true},function(error,response){
    if(error) throw error;
    console.log("It is currently " + response.body.currently.temperature +" degree out. "+
    "There is "+response.body.currently.precipProbability+"% chance of rain");
});


//api two for mapbox
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hhbWl1bDM4OCIsImEiOiJjazA0MnB1dmYwMnp3M2dteGY5bHVwNHVpIn0.jT7ORqugCKyCIBJmmDoxiA';
request({url:geocodeURL,json:true},function(error,response){
    let longitude = response.body.features[0].center[0];
    let laitude = response.body.features[0].center[1];
    let place_name = response.body.features[0].place_name;
    console.log(longitude,laitude,place_name);
});