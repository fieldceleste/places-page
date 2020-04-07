// <!--Business Logic for Places-->
// <---locationInfo is my prototype for mulitple properties.-->
// <!--Places is my object-->

function Places(name, date, landmarks, notes) {
  this.name = name;
  this.dateThere = date;
  this.landmarks = landmarks;
  this.notes = notes;
}
Places.prototype.locationInfo = function () {
  return this.locationName + "" + this.notes;
}
Places.prototype.showInfo = function (pick) {
  pick.append("<li>" + this.name + "</li>")
  $("#" + this.name + "info")
}
function toggleFuction() {
  $("ul#output").on("click", function () {
    var id = this.id + "info";
    $("#" + id).toggle();
  });
}

// <!--Business Logic for Places-->
var london = new Places("London", "2015", "Big Ben", "Such a busy city");
var paris = new Places("Paris", "2018", "Eiffel Tower", "what a magical place!");
var berlin = new Places("Berlin", "2018", "Brandenburg Gate", "lots of history new and old");
var items = [london, paris, berlin]

// <!--User Interface logic--->

$(document).ready(function () {
  var locationOutput = $("#output");
  list.ForEach(function (each) {
    each.locationInfo(locationOutput);
  });
  toggleFunction();
  $("#locationForm").submit(function (event) {
    event.preventDefault();
    var inputName = $("#name").val();
    var inputDate = $("#date").val();
    var inputLandmarks = $("#landmarks").val();
    var inputNotes = $("#notes").val();
    var location = new Places(inputName, inputDate, inputLandmarks, inputNotes);
    location.locationInfo(locationOutput);
  });
});