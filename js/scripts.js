// business logic
var createArray = function(number) {
  var high = number;
  var array = [];
  for (var i = 0; i <= high; i++) {
    array.push(" " + i);
  }
  for (var i = 1; i <= array.length - 1; i++) {
    if ([i] % 3 === 0) {
      array[i] = " " + "ping";
    }
    if ([i] % 5 === 0) {
      array[i] = " " + "pong";
    }
    if ([i] % 15 === 0) {
      array[i] = " " + "ping-pong";
    }
  }
  var shifted = array.shift();
  return array;
};

// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#number").val());
    var result = createArray(inputNumber);
    $("#result p").text(result);
    $("#result").show();
  });
});
