let slideIndex = 0;

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
  slideIndex = n;
}

function showSlide(n) {
  showSlides(n);
}


showSlides(slideIndex);