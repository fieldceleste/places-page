// <!--Business Logic for Places-->
// <---getlocations is my prototype.-->
// <!--Places is my object-->
function Places (name, date, landmarks,notes) {
  this.name=name;
  this.date=date;
  this.landmarks=landmarks;
  this.notes=notes;
}
Places.prototype.getLocations = function() { 
  var locations = "";
  this.locations.for(function(landmark){
    location += "<li>" + location + "</li>";
  });
return locations
}

Places.prototype.showPlaces = function()


var pdx = { name: "Portland" };
var sfo = { name: "San Francisco" };
var sea = { name: "Seattle" };
var cso = { name: "Aktau" };
var dzn = { name: "Zhezkazgan" };

var usa = { name: "United States of America" };
var kazakhstan = { name: "Kazakhstan" };
var uruguay = { name: "Uruguay" };