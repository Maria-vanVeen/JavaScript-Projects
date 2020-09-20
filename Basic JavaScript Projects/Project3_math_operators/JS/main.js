function addition(x, y) {
  var result = x + y;
  document.getElementById("addition").innerHTML = x + " + " + y + " = " + result;
}

function subtraction(x, y) {
  var result = x - y;
  document.getElementById("subtraction").innerHTML =  x + " - " + y + " = " + result;
}

function multiplication(x, y) {
  var result = x * y;
  document.getElementById("multiplication").innerHTML =  x + " * " + y + " = " + result;
}

function division(x, y) {
  var result = x / y;
  document.getElementById("division").innerHTML =  x + " / " + y + " = " + result;
}

function intDivision(x, y) {
  var quotient = Math.floor(x / y);
  var remainder = x % y;
  document.getElementById("intDivision").innerHTML =  x + " / " + y + " = " + quotient + ", with a remainder of " + remainder;
}

function opposite(x) {
  var result = -x;
  document.getElementById("opposite").innerHTML =  result + " is the opposite of " + x;
}

function math(v, w, x, y, z) {
  var result = (v + w * x)/y - z;
  document.getElementById("math").innerHTML = v + " plus, " + w + " times " + x + ", all over " + y +" and that minus " + z + " is " + result;
}

function random(x) {
  var result = Math.floor(Math.random()*x)
  document.getElementById("random").innerHTML =  result + " is a random number between 0 and " + x;
}

function pi() {
  document.getElementById("pi").innerHTML =  Math.PI;
}

function count(x) {
  //the increment happens after the x is added to the String.
  document.getElementById("count").innerHTML =  x++ + ", " + x++ + ", " + x++;
}

function count_down(x) {
  //the decrement happens after the x is added to the String.
  document.getElementById("count_down").innerHTML =  x-- + ", " + x-- + ", " + x--;
}

