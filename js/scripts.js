// business logic
var createArray = function(number) {
  var result = '';
  var high = number;
  var array = [];
  for (var i=0; i <= high; i++) {
    array.push(i);
  }

  // for (var i=0; i <= array.length; i++) {
  //   if (number[i] % 3 === 0) {
  //     return "ping";
  //   } else if (number[i] % 5 === 0) {
  //     return "pong";
  //   } else if (number[i] % 3 === 0 && number[i] % 5 === 0) {
  //     return "pingpong";
  //   }
  // }
  return result;
};

// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#number").val());
    var result = createArray(inputNumber);
    // if (result === "ping") {
    //   $(".result").text("ping")
    // } else if (result === "pong") {
    //   $(".result").text("pong")
    // } else if (result === "pingpong") {
    //   $(".result").text("pingpong")
    // }

    $("#result").show();
});
});
