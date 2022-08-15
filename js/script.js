var currentDay = moment().format("LLLL");
var currentDayEl = $("#currentDay");
// var calendarTableEl = $("#calendarTable");
currentDayEl.text(currentDay);
// console.log(currentDay);
var save = "Save";

var currentHour = moment().hours();
//var currentHour = 10;
console.log(currentHour);

function timeCompare() {
  $(".time-block").each(function () {
    //referencing this time-block -- depending on time of day it is a certain color
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

// for (i = 8; i < 18; i++) {
//   console.log("entering for loop");
//   if (i < currentHour) {
//     console.log(i);
//     if (localStorage.getItem(i) != null) {
//       calendarTableEl.append(
//         $("<tr>")
//           .attr("class", "past")
//           .append("<td>" + i + localStorage.getItem(i))
//           .append(
//             $("<button>")
//               .attr("class", "saveBtn")
//               .attr("onclick", "saveClicked()")
//           )
//           .append(save + "</button> </td> </tr>")
//       );
//     } else {
//       calendarTableEl.append(
//         $("<tr>")
//           .attr("class", "past")
//           .append("<td>" + i)
//           .append(
//             $("<button>")
//               .attr("class", "saveBtn")
//               .attr("onclick", "saveClicked()")
//           )
//           .append(save + "</button> </td> </tr>")
//       );
//     }
//   } else if (i == currentHour) {
//     calendarTableEl.append(
//       $("<tr>")
//         .attr("class", "present")
//         .append("<td>" + i + localStorage.getItem(i) + "</td> </tr>")
//     );
//   } else if (i > currentHour) {
//     calendarTableEl.append(
//       $("<tr>")
//         .attr("class", "future")
//         .append("<td>" + i + localStorage.getItem(i) + "</td> </tr>")
//     );
//   }
// }

$(".saveBtn").on("click", function () {
  var timeKey = $(this).parent().attr("id");
  var textValue = $(this).siblings("textarea").val();
  console.log(timeKey, textValue);
  localStorage.setItem(timeKey, textValue);
});
function saveClicked() {
  console.log("save has been clicked");
}

/*Questions:
    1. How do I make the table wider/buttons look better
    2. Is there a better way to use JQuery rather than just appending/attr every time I want an element to be added? 
    3. How do I add the input to time slots?
*/

/*Todo -- Make sure save function works 
make sure buttons in correct spot and everything saves with button click 
*/
