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


  // function saveProjectsToStorage(projects) {
  //   localStorage.setItem('projects', JSON.stringify(projects));
  // }

  // function toDos() {
  //   let toDoList = localStorage.getItem("toDoList");
  //   if(toDoList) {
  //     toDoList = JSON.parse(toDoList);
  //   } else {
  //     toDoList = [];
  //   }
  //   return toDoList;
  // }

  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).siblings(".description").attr("id");
 
    localStorage.setItem("text", JSON.stringify(text));
  })

  displayTime();
  setInterval(displayTime, 60000);
  setColor();
  setInterval(setColor, 60000);   
});


