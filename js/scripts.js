// business logic
var createArray = function(number) {
  var high = number;
  var array = [];
  for (var i=0; i <= high; i++) {
    array.push(i);
  }
  for (var i=1; i <= array.length - 1; i++) {
    if (i % 3 === 0) {
      array[i] = "ping";
    }
  }
  for (var i=1; i <= array.length - 1; i++) {
    if (i % 5 === 0) {
      array[i] = "pong";
    }
  }
  for (var i=1; i <= array.length - 1; i++) {
    if (i % 15 === 0) {
      array[i] = "pingpong";
    }
  }

// var divByThree = function(number) {
//   for (var i=0; i <= array.length; i++) {
//     if (number % 3 === 0) {
//       $(array.text("ping"));
    // } else if (number[i] % 5 === 0) {
    //   return "pong";
    // } else if (number[i] % 3 === 0 && number[i] % 5 === 0) {
    //   return "pingpong";
  // alert("range is: " + array);
  return array;
};
//
// var publishArray = function(createArray(number)) {
//   var result = ''
//   var list = document.createElement('ul');
//   for (var i = 0; i < array.length; i++) {
//     item.appendChild(document.createTExtNode(array[i]));
//     list.appendChild(item);
//   }
//   return list;
// }
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
    $("#result ul").text(result);
    // alert("made it!")
    $("#result").show();
});
});
