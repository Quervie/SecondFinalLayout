let slideIndex = 0;
const slides = document.getElementsByClassName("box");

function showSlides(n) {
    if (n > slides.length - 1) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});
