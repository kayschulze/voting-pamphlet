$(function() {
  var age = parseInt(prompt("Please enter your age below:"));

  if (age >= 18) {
    $(".over-18").show();
  } else {
    $(".under-18").show();
  }
});
