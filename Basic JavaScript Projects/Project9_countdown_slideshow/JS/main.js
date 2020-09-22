var slideIndex = 0;
showSlides(slideIndex);

//NEXT PREVIOUS CONTROLS
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//DOT CONTROLS
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n >= slides.length) {slideIndex = 0;} // wrap around on the right
  if (n < 0) {slideIndex = slides.length - 1;} // wrap around on the left
  for (var i = 0; i < slides.length; i++) { // reset display to none for all mySlides
    slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) { // reset dots to inactive for all dots
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
  slideIndex++;
  setTimeout(showSlides, 2000);
}