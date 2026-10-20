
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");
    menuButton.setAttribute("aria-expanded", isOpen);
});

const navItems = document.querySelectorAll(".nav-link");

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuButton.setAttribute("aria-expanded", "false");
    });
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    formMessage.style.display = "block";
    contactForm.reset();
    return;
});

const darkModeButton = document.createElement("button");

darkModeButton.textContent = "🌙";
darkModeButton.setAttribute("aria-label", "Toggle dark mode");

darkModeButton.style.position = "fixed";
darkModeButton.style.bottom = "20px";
darkModeButton.style.right = "20px";
darkModeButton.style.zIndex = "999";
darkModeButton.style.width = "45px";
darkModeButton.style.height = "45px";
darkModeButton.style.borderRadius = "50%";
darkModeButton.style.border = "none";
darkModeButton.style.cursor = "pointer";
darkModeButton.style.fontSize = "20px";

document.body.appendChild(darkModeButton);

darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeButton.textContent = "LIGHT";
    } else {
        darkModeButton.textContent = "DARK";
    }
});

const currentYear = new Date().getFullYear();
const footerText = document.querySelector("footer p");

footerText.innerHTML =
    "&copy; " + currentYear +
    " SHARIFAH NUR FARAHIN BINTI WAN BUJANG. All Rights Reserved.";

window.addEventListener("load", function () {
    console.log("Welcome to my personal portfolio website!");
});
