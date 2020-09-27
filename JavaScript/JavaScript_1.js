//SWITCH
function color() {
  var color_output = "";
  var color = document.getElementById("color_input").value;
  var color_str = " is a great color!";
  switch(color) {
    case "Red":
    case "red":
        color_output = color + color_str;
    break;
    case "Orange":
    case "orange":
        color_output = color + color_str;
    break;
    case "Yellow":    
    case "yellow":
      color_output = color + color_str;
    break;
    case "Green":
    case "green":
      color_output = color + color_str;
    break;
    default:
      color_output = color + " is not on the list. Please choose a color from the list."
  }
  document.getElementById("color_output").innerHTML = color_output;
}

//getElementByClassName()
function change_text() {
  var changeable = document.getElementsByClassName("changeable");
  changeable[0].innerHTML = "This text has changed";
}

//CANVAS
var canv = document.getElementById("canvas_area");
var ctx = canv.getContext("2d");
console.log(canv);
console.log(ctx);

var gradient = ctx.createLinearGradient(0, 400, 400,0);
gradient.addColorStop(0, "magenta");
gradient.addColorStop(0.5, "Blue");
gradient.addColorStop(1, "Red");

ctx.strokeStyle = gradient;
ctx.lineWidth = 10;
ctx.fillStyle = "Wheat";
ctx.fillRect(0,0,400,400);
ctx.strokeRect(0,0,400,400);

ctx.beginPath();
ctx.moveTo(30,200);
ctx.lineTo(200,30);
ctx.lineTo(370,200);
ctx.strokeStyle = "magenta";
ctx.stroke();

ctx.beginPath();
ctx.arc(200,300,30,0, 2*Math.PI);
ctx.strokeStyle = "blue";
ctx.stroke();
