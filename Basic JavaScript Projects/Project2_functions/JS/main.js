
function populate() {
  var str = "This is the original \'ipsum lorem\' text: "
  var ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  var ipsum = ipsum.fontcolor("red");
  var ipsum = ipsum.fontsize(2);
  var ipsum = ipsum.italics();
  document.getElementById("ipsum").innerHTML = str + ipsum;
  //alert(ipsum);
  
}

function count_to_3() {
  str = "one two ";
  str += "three!";
  //alert(123);
  document.getElementById("count").innerHTML = str;
}