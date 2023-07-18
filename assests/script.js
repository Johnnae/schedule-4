$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(".time-block").each(function() {
  var currentTime = moment().hours();
  var timeBlock = parseInt($(this).attr("id").split("-")[1]);
  if (timeBlock < currentTime) {
    $(this).addClass("past");
  } else if (timeBlock === currentTime) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

$(".saveBtn").on("click", function() {
  var timeBlock = $(this).parent().attr("id");
  var description = $(this).siblings(".description").val();
  localStorage.setItem(timeBlock, description);
}); 

$(".description").each(function() {
    var timeBlock = $(this).parent().attr("id");
    var savedData = localStorage.getItem(timeBlock);
    if (savedData) {
      $(this).val(savedData);
    }
  });