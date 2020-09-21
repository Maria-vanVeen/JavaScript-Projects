function combined_sentence() {
  var str1 = document.getElementById("text_1").value;
  var str2 = document.getElementById("text_2").value;
  var str3 = document.getElementById("text_3").value;
  var str4 = document.getElementById("text_4").value;
  var combined_str = str1.concat(str2, str3, str4);

  document.getElementById("text_combined").innerHTML = combined_str;
}

function slice() {
  var str =  document.getElementById("text_5").value;
  var new_str = str.slice(2,4);

  document.getElementById("sliced_text").innerHTML = new_str;
}

function uppercase() {
  var str = document.getElementById("text_6").value;
  var new_str = str.toUpperCase();
  
  document.getElementById("uppercase_text").innerHTML = new_str;
}

function find() {
  var paragraph = document.getElementById("search_text").innerHTML;
  var str = document.getElementById("text_7").value;
  var pos = paragraph.search(str);

  document.getElementById("text_found").innerHTML = "Your text was found at index " + pos;
}

function convert_to_number() {
  var number = document.getElementById("number").value;
  var str = number.toString();
  
  document.getElementById("converted").innerHTML = str + " is now a " + (typeof str);
}

function set_precision() {
  var str = document.getElementById("number_2").value;
  var new_number = parseFloat(str).toPrecision(4);//even if the input field is text the value is a string. So it needs to be converted to a float.
  
  document.getElementById("converted_2").innerHTML = new_number;
}

var x = 123.4568273545829478875490290;
y = x.toFixed(3);
document.write(y + " is a " + typeof y);
document.write("<br>")
document.write(y.valueOf());
