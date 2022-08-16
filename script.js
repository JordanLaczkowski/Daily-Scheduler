var currentDay = moment().format("LLLL");
var currentDayEl = $("#currentDay");

currentDayEl.text(currentDay);

var save = "Save";

var currentHour = moment().hours();

function timeCompare() {
  $(".time-block").each(function () {
    //note -- referencing this time-block -- depending on time of day it is a certain color
    var hourBlock = $(this).attr("id");
    if (hourBlock < currentHour) {
      $(this).addClass("past");
    }
    if (hourBlock == currentHour) {
      $(this).addClass("present");
    } else if (hourBlock > currentHour) {
      $(this).addClass("future");
    }
  });
}
timeCompare();

$("#9 textarea").val(localStorage.getItem("9"));
$("#10 textarea").val(localStorage.getItem("10"));
$("#11 textarea").val(localStorage.getItem("11"));
$("#12 textarea").val(localStorage.getItem("12"));
$("#13 textarea").val(localStorage.getItem("13"));
$("#14 textarea").val(localStorage.getItem("14"));
$("#15 textarea").val(localStorage.getItem("15"));
$("#16 textarea").val(localStorage.getItem("16"));
$("#17 textarea").val(localStorage.getItem("17"));

$(".saveBtn").on("click", function () {
  var timeKey = $(this).parent().attr("id");
  var textValue = $(this).siblings("textarea").val();
  localStorage.setItem(timeKey, textValue);
});
function saveClicked() {}
