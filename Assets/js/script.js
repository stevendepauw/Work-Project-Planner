// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
   
});

let today = dayjs().format("dddd, MMM DD");
let theHour = dayjs().hour();
let timeDisplay = $("#currentDay");
let taskToSave = $(".saveBtn");
let ppf = $(".description"); 
  
function displayTime() {
  timeDisplay.text(today);
}

function setColor() {
  ppf.each(function() {
    let hour = $(this).attr("id")

    if(theHour > hour) {
      $(this).addClass("past");
      $(this).removeClass("present");
    } 
    else if(theHour == hour) {
      $(this).addClass("present");
      $(this).removeClass("future");
    } 
    else {
      $(this).addClass("future");
      $(this).removeClass("past");
    } 
  })
}

$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).siblings(".description").attr("id");
 
  localStorage.setItem(time, text);
})

displayTime();
setInterval(displayTime, 60000);
setColor();
setInterval(setColor, 60000);
