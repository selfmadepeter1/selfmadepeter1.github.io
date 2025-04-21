let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");
  const captionText = document.getElementById("caption");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active class from all thumbnails
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show selected slide
  slides[slideIndex - 1].style.display = "block";

  // Highlight thumbnail
  dots[slideIndex - 1].className += " active";

  // Set caption text
  captionText.innerHTML = dots[slideIndex - 1].alt;
}