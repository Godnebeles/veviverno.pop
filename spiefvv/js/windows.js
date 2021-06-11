
$("#close-contacts").click(function() {
  $("#contacts").css("display", "none");
  $("#main").css("display", "block");
});


$("#contacts-main").click(function() {
  $("#contacts").css("display", "block");
  $("#main").css("display", "none");
});

$("#close-presentation").click(function() {
  $("#presentation").css("display", "none");
  $("#main").css("display", "block");
});


$("#contacts-presentation").click(function() {
  $("#contacts").css("display", "block");
  $("#presentation").css("display", "none");
});

$("#presentation-contacts").click(function() {
  $("#presentation").css("display", "block");
  $("#contacts").css("display", "none");

});

$("#presentation-main").click(function() {
  $("#presentation").css("display", "block");
  $("#main").css("display", "none");

});