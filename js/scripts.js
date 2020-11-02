//bussiness logic
// Describe: TravelLog();

// Test: It will create Constructor for TravelLog to save Places as an array
// Expect: TravelLog().toEqual([]);
function TravelLog(){
  this.places = [];
}

function Place(location, landmark, timeOfYear, notes){
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

//user interface logic