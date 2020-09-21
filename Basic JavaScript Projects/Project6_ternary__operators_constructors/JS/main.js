function Ride_function() {
  var height = document.getElementById("height").value;
  var can_ride = (height<52) ? "You are too short": "You are tall enough";
  document.getElementById("ride").innerHTML = can_ride + " to ride";
}

function can_vote() {
  var age = document.getElementById("age").value;
  var can_vote = (age<18) ? "You are too young": "You are old enough";
  document.getElementById("vote").innerHTML = can_vote + " to vote";
}

function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "Black and White");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + " colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Animal(species, color, age, name) {
  this.species = species;
  this.color = color;
  this.age = age;
  this.name = name;
}

var animal_1 = new Animal("cat", "orange", 3, "Kitty");
var animal_2 = new Animal("dog", "black", 6, "Spencer");

function show_animal() {
  document.getElementById("animal").innerHTML = "My " + animal_1.color + " " + animal_1.species + ", " + animal_1.name + ", is " + animal_1.age + " years old."
}

function reverse_str() { //get the original string an doutput the reversed string
  var orig_string = document.getElementById("str").value;
  document.getElementById("reversed_str").innerHTML = reverse(orig_string);
  function reverse(os) {//reverse the string
    ns = "";
    for (i=0; i < os.length; i++) {
      ns = ns + os.charAt(os.length-1-i);
    }
    return ns;
  }
}
