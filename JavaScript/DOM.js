var mainHeading = document.getElementsByTagName("h1")[0];
var atr = document.createAttribute("class");
atr.value = "democlass";
mainHeading.setAttributeNode(atr);

var myWebsite = "https://www.catharinavanveen.com";
var anchorArray = document.getElementsByClassName("myWebsite");
console.log(anchorArray);
var att = document.createAttribute("href");
console.log(att);
att.value = myWebsite;
for (let i = 0; i< anchorArray.length; i++) {
  anchorArray[i].setAttributeNode(att.cloneNode(true));
  anchorArray[i].innerHTML = myWebsite;
}

