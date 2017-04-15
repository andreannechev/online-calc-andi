$( document ).ready(function() {
    /*
    1. Ф която взима стойността на всеки бутон и да го дисплейва в екрана
    Ф, която запазва избраните числа в стринг

    Ф, при натискане на CE да нулира стринга

    Ф, при натискане на някой оператор да запазва стринга и да създава нов стринг
    Ф, която да събере двата стринга и да покаже резултата
*/
/*1.
var cifArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < cifArr.length; i++)
  $("#1").click(function() {
    console.log($(this).attr("value"));
  });
*/

// add function
var num1 = undefined;
var num2 = undefined;
function add(num1, num2) {
  return(num1 + num2);
}
function subtract(num1, num2) {
  return(num1 - num2);
}
function multiply(num1, num2) {
  return(num1 * num2);
}
function devide(num1, num2) {
  return(num1 / num2);
}
// add number listener
$("#1").click(function() {
  console.log($(this).attr("value"));
});
$("#2").click(function() {
  console.log($(this).attr("value"));
});
$("#3").click(function() {
  console.log($(this).attr("value"));
});
$("#4").click(function() {
  console.log($(this).attr("value"));
});
$("#5").click(function() {
  console.log($(this).attr("value"));
});
$("#6").click(function() {
  console.log($(this).attr("value"));
});
$("#7").click(function() {
  console.log($(this).attr("value"));
});
$("#8").click(function() {
  //$("#screen").html('');
  $("#screen").append($(this).attr("value"));
});
$("#9").click(function() {
  $("#screen").append($(this).attr("value"));
});
$("#0").click(function() {
  console.log($(this).attr("value"));
});
$("#decimal").click(function() {
  console.log($(this).attr("value"));
});
// add operator listener
$("#devide").click(function() {
  console.log($(this).attr("value"));
});
$("#multiply").click(function() {
  console.log($(this).attr("value"));
});
$("#subtract").click(function() {
  console.log($(this).attr("value"));
});
$("#add").click(function() {
  console.log($(this).attr("value"));
});

// store pressed buttons in array


});// A $( document ).ready() block.
