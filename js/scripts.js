//bussiness logic
// Test: It will push new Places into array
// Expect: new TravelLog().toEqual([new Place]);

function TravelLog(){
  this.places = [];
}

TravelLog.prototype.addPlace = function(place) {
  this.places.push(place);
}

function Place(location, landmark, timeOfYear, notes){
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}
let travelLog = new TravelLog();
let place = new Place ("Japan", "Tokyo Tower", "Spring/Autumn", "fun place!");
travelLog.addPlace(place);

//user interface logic