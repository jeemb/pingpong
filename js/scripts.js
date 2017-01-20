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
  //     $(array.text("ping"));
    // } else if (number[i] % 5 === 0) {
    //   return "pong";
    // } else if (number[i] % 3 === 0 && number[i] % 5 === 0) {
    //   return "pingpong";
    // }
  // }
  alert("range is: " + array);
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
    $("#result p").text(result);
    alert("made it!")
    $("#result").show();
});
});
