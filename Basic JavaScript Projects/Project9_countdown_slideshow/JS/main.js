var slideIndex = 1;

showSlides(slideIndex);


function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  console.log(typeof slides);
  console.log(slides);
  console.log(typeof slides[0]);
  console.log(slideIndex);
  slides[slideIndex-1].style.display = "block";
}