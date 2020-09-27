function displaySpecies(pet) {
  var species = pet.getAttribute("data-species");
  alert(pet.innerHTML + " is a " + species);
}

var ages = [2,5,19,18];

checkAge = (age) => age>= 18;

console.log(checkAge(3));
console.log(ages.some(checkAge));