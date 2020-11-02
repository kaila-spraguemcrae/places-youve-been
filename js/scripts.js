//bussiness logic
// Describe: Place();
// Test: It will create a Constructor for Place containing different properties
// Expect: Place().toEqual(location, landmarks, time of year, notes);

function Places(location, landmark, timeOfYear, notes){
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}
//user interface logic