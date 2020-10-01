function validateContactForm() {
    console.log("function running");
  if (document.forms["contactform"]["name"].value == "") {
    alert("Please provide your name.");
    return false;
  }
  if (document.forms["contactform"]["telephone"].value == "") {
    alert("Please provide your phone number.");
    return false;
  }
}

function openForm(form) {
  document.getElementById(form).style.display = "block";
}

function closeForm(form) {
  document.getElementById(form).style.display = "none";
}

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $("#slideshow > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#slideshow");
}, 3000);

var cat = {
  name: "Kitty",
  age: 4,
  action: function(name) {
    return "Meow, meow, " + this.name + " says: 'hello, " + name + "!'";
  },
  color: "orange"
  
 };

 //JSON.stringify() and JSON.parse()
var JSONstring = JSON.stringify(cat);
document.getElementById("JSONstring").innerHTML = JSONstring;
document.getElementById("action").innerHTML = cat.action("Karin");

var JSONstring2 = '{"name":"Kitty","age":4,"color":"orange"}';

var cat2 = JSON.parse(JSONstring2);
document.getElementById("object").innerHTML = cat2;
document.getElementById("fromObject").innerHTML = "My name is " + cat2.name;

//localStorage()
localStorage.setItem("name", "Kitty");
document.getElementById("localStorage").innerHTML = localStorage.getItem("name");