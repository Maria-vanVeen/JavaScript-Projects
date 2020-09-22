var slideIndex = 0;
var timer;
showSlides();

//NEXT PREVIOUS CONTROLS
function plusSlides(n) {
  clearTimeout(timer);
  slideIndex -= 1; //undo the automatic increment of showSlides()
  slideIndex += n; //apply next or previous to slideIndex
  showSlides();
}

//DOT CONTROLS
function currentSlide(n) {
  clearTimeout(timer);
  slideIndex = n;
  showSlides();
}

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (slideIndex >= slides.length) {slideIndex = 0;} // wrap around on the right
  if (slideIndex < 0) {slideIndex = slides.length - 1;} // wrap around on the left
  for (var i = 0; i < slides.length; i++) { // reset display to none for all mySlides
    slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) { // reset dots to inactive for all dots
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
  slideIndex++;
  timer = setTimeout(showSlides, 4000);
}