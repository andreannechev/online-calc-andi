$( document ).ready(function() {

// add function
var num = "";
var num1 = "";
var num2 = undefined;
var operator = "";
var result = undefined;
var cifArr = ["#0", "#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8", "#9", "#decimal"];
var opArr = ["#devide", "#multiply", "#subtract", "#add"];

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
for (var i = 0; i < cifArr.length; i++) {
    $(cifArr[i]).click(function() {
    $("#screen").append($(this).attr("value"));
    num += $(this).attr("value");
    console.log(num);
  });
}

// add operator listener
for (var i = 0; i < opArr.length; i++){
  $(opArr[i]).click(function() {
    $("#screen").html("");
    num1 = parseFloat(num);
    num = "";
    operator = $(this).attr("value");
  });
}

// add equal listener
$("#equal").click(function() {
  num2 = parseFloat(num);
  if (operator == '+'){
    result = add(num1, num2);
    $("#screen").html(result);
  } else if (operator == '-'){
    result = subtract(num1, num2);
    $("#screen").html(result);
  } else if (operator == '/'){
      result = devide(num1, num2);
      $("#screen").html(result);
    } else if (operator == '*'){
        result = multiply(num1, num2);
        $("#screen").html(result);
        }
  });

// clear button
$("#clear").click(function() {
    $("#screen").empty();
    num = 0;
    console.log(num);
});


});// A $( document ).ready() block.
