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

/* ========================================
   CONTACT FORM
======================================== */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const interest = document.getElementById("interest").value;
        const message = document.getElementById("message").value.trim();

        formMessage.classList.remove("success", "error");

        if (!name || !email || !interest || !message) {

            formMessage.textContent =
                "Please complete all required fields.";

            formMessage.classList.add("error");

            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.classList.add("error");

            return;
        }

        formMessage.textContent =
            `Thank you, ${name}. Your enquiry has been received.`;

        formMessage.classList.add("success");

        contactForm.reset();

    });

}