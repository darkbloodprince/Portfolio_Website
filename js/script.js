/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon'); // Selects the hamburger menu icon
let navbar = document.querySelector('.navbar'); // Selects the navigation bar

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggles the close icon (usually from boxicons)
    navbar.classList.toggle('active'); // Shows or hides the navbar on click
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section'); // Selects all sections in the page
let navLinks = document.querySelectorAll('header nav a'); // Selects all nav links

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // Current vertical scroll position
        let offset = sec.offsetTop - 150; // Offset from the top with buffer
        let height = sec.offsetHeight; // Height of the current section
        let id = sec.getAttribute('id'); // Section ID (used for linking)
        // Check if current scroll position is within this section
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active'); // Remove active class from all links
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Add active class to the current section link
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100); // Adds 'sticky' class if scroll > 100px
    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    // Close navbar and icon when any nav link is clicked
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    //reset:true, // Uncomment if you want the animation to repeat every time
    distance: '80px', // Distance elements move during reveal
    duration: 2000,  // Duration of animation (in ms)
    delay: 200 // Delay before animation starts
});
// Reveals elements from different directions based on selector
ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form, .timeline-content',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin: 'right'});

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text',{
    strings: ['Java Developer','System Engineer'], // Words to type
    typeSpeed: 100, // Speed of typing (ms)
    backSpeed: 100, // Speed of backspacing (ms)
    backDelay: 1000, // Delay before starting to erase (ms)
    loop: true // Loops the typing animation forever
})