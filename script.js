// Toggle Menu Icon
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll Sections Active Link & Sticky Navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

window.onscroll = () => {
    // Active Link
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky Navbar
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when clicking a nav link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Typing Effect
const textArray = ["Cyber Security Student", "Designer", "Video Editor", "Programmer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
const typeTarget = document.querySelector('.multiple-text');

function typeEffect() {
    if(!typeTarget) return;

    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        // Erasing
        typeTarget.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Typing
        typeTarget.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? erasingDelay : typingDelay;

    if (!isDeleting && charIndex === currentText.length) {
        // Pause at end
        typeSpeed = newTextDelay;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 500; // Pause before typing next word
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect on load
document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(typeEffect, newTextDelay + 250);
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('section, .heading-container, .about-content, .skill-category, .project-box, .achieve-card');

revealElements.forEach((el) => {
    el.classList.add('reveal');
});

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();

// Contact Form Submit Event
const contactForm = document.querySelector("form");
if(contactForm) {
    contactForm.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Thank you! Message sent successfully.");
        contactForm.reset();
    });
}
