$(function () {
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

  function todDos() {
    ppf.each(function() {
      let block = $(this).attr("id")
      $(this).val(localStorage.getItem(block));
    })
  }

  $(".saveBtn").on("click", function () {
    let text = $(this).siblings(".description").val();
    let time = $(this).siblings(".description").attr("id");
 
    localStorage.setItem(time, text);
  })

  displayTime();
  setColor();
  todDos();
  setInterval(displayTime, 60000);
  setInterval(setColor, 60000);   
});


