const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let slideInterval;


function showSlide(index) {

    slides.forEach(function (slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function (dot) {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}


function nextSlide() {

    let next = currentSlide + 1;

    if (next >= slides.length) {
        next = 0;
    }

    showSlide(next);
}


function startSlider() {

    slideInterval = setInterval(nextSlide, 5000);
}


function resetSlider() {

    clearInterval(slideInterval);

    startSlider();
}


dots.forEach(function (dot) {

    dot.addEventListener("click", function () {

        const index = Number(dot.dataset.slide);

        showSlide(index);

        resetSlider();

    });

});


startSlider();