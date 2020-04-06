// <!--Business Logic for Places-->
// <---locationInfo is my prototype or mulitple properties.-->
// <!--Places are my objects-->
function Places (name, time, landmarks,notes) {
  this.locationName=name;
  this.timeofYear=time;
  this.landmarks=landmarks;
  this.notes=notes;
}
Places.prototype.locationInfo = function(){
  return this.locationName + '' + this.notes;

var london = new Places ("London" , "2015", "Big Ben", "Such a busy city");
var paris = new Places ("Paris", "2018", "Eiffel Tower", "what a magical place!");
var berlin = new Places = ("Berlin", "2018", "Brandenburg Gate", "lots of history new and old");

var londonInfo= london.locationInfo()
var parisInfo = paris.locationInfo()
var berlinInfo = berlin.locationInfo()


}
// <!--User Interface logic--->

$(document).ready(function() }

