// script.js - Enhances interactivity on your website

// 1. Hide Preloader after page loads
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.opacity = "0";
        setTimeout(() => { preloader.style.display = "none"; }, 500);
    }

    // Initialize WOW.js for animations
    new WOW().init();
});

// 2. Navbar Toggle for Mobile View
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar-collapse");

if (navbarToggler) {
    navbarToggler.addEventListener("click", function () {
        navbarMenu.classList.toggle("show");
    });
}

// 3. Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Adjust for fixed header
                behavior: "smooth"
            });
        }
    });
});

// 4. Sticky Navbar Effect
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
