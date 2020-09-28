function getReceipt() {
  console.log("getReceipt running");
  var receiptText = "<h3>You ordered:</h3>";
  var runningTotal = 0;
  var sizeCost = 0;
  var sizeArray = document.getElementsByClassName("size");
  for (let i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      var selectedSize = sizeArray[i].value;
      receiptText = receiptText + selectedSize + "<br>";
    }
  }
  if (selectedSize === "Personal Pizza") {
    sizeCost = 6;
  } else if (selectedSize === "Small Pizza") {
    sizeCost = 8;
  } else if (selectedSize === "Medium Pizza") {
    sizeCost = 10;
  } else if (selectedSize === "Large Pizza") {
    sizeCost = 14;
  } else if (selectedSize === "Extra Large Pizza") {
    sizeCost = 16;
  } else {
    alert("Price is not defined. Make a valid size selection");
    return;
  }
  runningTotal = sizeCost;
  console.log(receiptText);
  console.log("running cost = " + runningTotal)
  getTopping(runningTotal, receiptText);
}

function getTopping(runningTotal, receiptText) {
  var toppingTotal = 0;
  var selectedTopping = [];
  var toppingArray = document.getElementsByClassName("toppings");
  for (let i = 0; i < toppingArray.length; i++) {
    if (toppingArray[i].checked) {
      selectedTopping.push(toppingArray[i].value);
      receiptText = receiptText	+ toppingArray[i].value + "<br>";
    }
  }
  console.log(receiptText);
  var toppingCount = selectedTopping.length;
  if (toppingCount > 1) {
    toppingTotal = toppingCount -1;
  } else {
    toppingTotal = 0;
  }
  runningTotal = runningTotal + toppingTotal;
  document.getElementById("showText").innerHTML = receiptText;
  document.getElementById("totalPrice").innerHTML = "<h3>Total: $" + runningTotal + ".00</h3>";
}