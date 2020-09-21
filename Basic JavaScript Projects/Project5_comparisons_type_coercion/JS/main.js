document.write(typeof true);
document.write("<br>");
document.write(2E310)
document.write("<br>");
document.write(-2E310)
document.write("<br>");
document.write(2<10)
document.write("<br>");
document.write(2>10);
document.write("<br>");
document.write("00" + 7);

console.log(2+2);
console.log(isNaN('feather'));
console.log('70'==70);
console.log('70'==70);

console.log(70===70);
console.log("text"===70);
console.log('70'===70);
console.log(7===70);

console.log(7>3 && 3>1);
console.log(7>3 && 3<1);
console.log(7>3 || 3<1);

console.log(!(7<3));
console.log(!(7>3));

function divideByZero() {
  //alert("divideByZero");
  document.getElementById("test").innerHTML = 0/0;
}

function answerIsNaN(x, test_id) {
  //alert("answerIsNaN");
  document.getElementById(test_id).innerHTML = isNaN(x);
}