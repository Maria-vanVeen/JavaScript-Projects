

function validateForm() {
  if (document.forms["contactForm"]["name"].value == "") {
    alert("Please fill out Name");
    return false;
  }

  if (document.forms["contactForm"]["city"].value == "") {
    alert("Please fill out City");
    return false;
  }

  if (document.forms["contactForm"]["country"].value == "select") {
    alert("Please select Country");
    return false;
  }

  if (document.forms["contactForm"]["date"].value == "") {
    alert("Please pick a date in the future");
    return false;
  }

  var date = Date.parse(document.forms["contactForm"]["date"].value);
  var t = new Date;
  var today = Date.parse(new Date);
  if (date <= today) {
    alert("Please pick future date");
    return false;
  }

  if (document.forms["contactForm"]["message"].value == "") {
    alert("Please leave a message");
    return false;
  }
}