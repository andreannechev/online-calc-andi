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
var num = "";
var num1 = "";
var num2 = undefined;
var operator = "";
var result = undefined;


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
var cifArr = ["#0", "#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8", "#9", "#decimal"];

// add number listener
for (var i = 0; i < cifArr.length; i++) {

    $(cifArr[i]).click(function() {
    $("#screen").append($(this).attr("value"));
    num += $(this).attr("value");
    console.log(num);
  });
}




// add operator listener
$("#devide").click(function() {
  $("#screen").append($(this).attr("value"));
});
$("#multiply").click(function() {
  $("#screen").append($(this).attr("value"));
});
$("#subtract").click(function() {
  $("#screen").append($(this).attr("value"));
});
$("#add").click(function() {
  $("#screen").html("");
  num1 = parseFloat(num);
  num = "";
  operator = $(this).attr("value");
});

// add equal listener

$("#equal").click(function() {
  num2 = parseFloat(num);
  result = add(num1, num2);
  $("#screen").html(result);
  //console.log(result);
});

// clear button
$("#clear").click(function() {
    $("#screen").empty();
    num = 0;
    console.log(num);
  //console.log(result);
});



// store pressed buttons in array


});// A $( document ).ready() block.
