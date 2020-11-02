//bussiness logic
// Test: It will push new Places into array
// Expect: new TravelLog().toEqual([new Place]);

function TravelLog(){
  this.places = [];
  this.currentId = 0;
  
}

TravelLog.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

TravelLog.prototype.assignId = function(){
  this.currentId += 1
  return this.currentId;
}

function Place(location, landmark, timeOfYear, notes){
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}
let travelLog = new TravelLog();

let place1 = new Place ("Tokyo, Japan", "Tokyo Tower", "Spring/Autumn", "fun place!");
let place2 = new Place ("Florence, Italy","Ponte-Vecchio", "Summer", "so pretty");
let place3 = new Place ("Rome, Italy", "The Vatican", "summer", "City is WOW!");
let place4 = new Place ("New York, USA", "Central Park", "Autumn", "Bring a jacket!")

travelLog.addPlace(place1);
travelLog.addPlace(place2);
travelLog.addPlace(place3);
travelLog.addPlace(place4);


//user interface logic

function displayPlacesDetails(travelLogToDisplay){
  let htmlForPlaceInfo = "";
  let placesList = $("#tokyo1");
  travelLogToDisplay.places.forEach(function(places){
    htmlForPlaceInfo = "<li>" + travelLog.places[0].landmark + "</li>"; 
  });
  placesList.html(htmlForPlaceInfo);
}

$(document).ready(function(){
  
  $("#tokyo").click(function(){
    displayPlacesDetails(travelLog)
  });

 // displayPlacesDetails(travelLog);
});