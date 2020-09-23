function call_loop() {
  counter=0;
  text = "";
  while (counter < 10) {
    text += counter + "<br>"
    counter++
  }
  document.getElementById("loop").innerHTML = text;
}

function string_length() {
  var str = document.getElementById("str").value;
  var length = str.length;
  document.getElementById("string_length").innerHTML = "Your text has " + length + " characters.";
}

function for_loop() {
  var list = ["Apples", "Bananas", "Cherries", "Grapes", "Oranges"];
  var content = "";
    for (let i=0; i < list.length; i++) {
      content += list[i] + "<br>";
      console.log(i);
    }
  console.log(i); //should output undefined, because out of scope (block scope)
  document.getElementById("list").innerHTML = content;
}

function array_function() {
  var list = ["Apples", "Bananas", "Cherries", "Grapes", "Oranges"];
  document.getElementById("array").innerHTML = "item 2 of th list is " + list[1];
}

function constant_function() {
  const thing = {species: "cat", name: "Kitty", age: 3}
  thing.species = "dog";
  thing.color = "orange";
  var text = "";
  text += "species: " + thing.species + "<br>";
  text += "name: " + thing.name + "<br>";
  text += "age: " + thing.age + "<br>";
  text += "color: " + thing.color + "<br>";
  document.getElementById("constant").innerHTML = text;
}

const Maria = {givenNames: "Maria Catharina", lastName: "van Veen", city: "Columbia"}
function givenNames() {
  console.log(Maria.givenNames)
  return Maria.givenNames;
} 

function persData() {
  document.getElementById("return").innerHTML = givenNames();
}

//OBJECT WITH METHOD
let pet = {
  species: "cat", 
  name: "Kitty", 
  age: 3,
  description : function() {
    return "My pet " + this.species + ", " + this.name + ", is " + this.age + " years old.";
  }
}

document.getElementById("pet").innerHTML = pet.description();

//BREAK IN LOOP
var break_text = "";
for (let i = 0; i < 10; i++) {
  if (i == 5) {break;}
  break_text += i + "<br>";
}
document.getElementById("break").innerHTML = break_text;

//CONTINUE IN LOOP
var continue_text = "";
for (let i = 0; i < 10; i++) {
  if (i % 2 != 0) {continue;}
  continue_text += i + "<br>";
}
document.getElementById("continue").innerHTML = continue_text;
