/* ================= MOBILE MENU TOGGLE ================= */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* ================= CLOSE MENU ON NAV CLICK ================= */

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});


/* ================= ACTIVE NAV LINK ON SCROLL ================= */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {

    let top = window.scrollY;

    sections.forEach(sec => {

        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document
                .querySelector('header nav a[href*=' + id + ']')
                ?.classList.add('active');
        }
    });

    /* ================= STICKY HEADER ================= */

    let header = document.querySelector('.header');

    if(window.scrollY > 80){
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.35)";
    }else{
        header.style.boxShadow = "none";
    }

});


/* ================= SCROLL REVEAL ================= */

ScrollReveal({
    distance: '70px',
    duration: 1800,
    delay: 150,
    easing: 'ease-in-out',
    reset: false
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});

ScrollReveal().reveal('.home-img, .services-box, .portfolio-box, .timeline-content, .contact form', {
    origin: 'bottom'
});

ScrollReveal().reveal('.about-img', {
    origin: 'left'
});

ScrollReveal().reveal('.about-content', {
    origin: 'right'
});


/* ================= TYPING ANIMATION ================= */

const typed = new Typed('.multiple-text', {

    strings: [
        'Java Backend Engineer',
        'Microservices Developer',
        'Spring Boot Specialist',
        'Cloud-Ready Engineer'
    ],

    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1200,
    smartBackspace: true,
    loop: true
});
