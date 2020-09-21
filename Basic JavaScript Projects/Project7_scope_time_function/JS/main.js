x = 10;
y = 20;

function add10_to_x() {
  var a = 10;
  console.log(a);
  document.write(x + a);
}

function add10_to_y() { //intentionally misusing a local variable to see what happens
  console.log(a);
  document.write(y + a);
}

add10_to_x();
add10_to_y();


function greet() {
  if (new Date().getHours() < 12) {
    document.getElementById("greeting").innerHTML = "Good Morning!";
  }
  else if (new Date().getHours() < 18){
    document.getElementById("greeting").innerHTML = "Good Afternoon!";
  }
  else {
    document.getElementById("greeting").innerHTML = "Good Evening!";
  }
}

function grade() {
  if (document.getElementById("answer").value == 4) {
    document.getElementById("grade").innerHTML = "You are correct";
  }
  else {
    document.getElementById("grade").innerHTML = "You are incorrect";
  }
}