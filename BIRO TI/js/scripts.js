/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
// Add this to your scripts.js

window.addEventListener('DOMContentLoaded', event => {

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function activateNavLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 60) { // Adjust offset as needed
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', activateNavLink);
    activateNavLink(); // Call once to set initial state
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-shadow');
    } else {
      navbar.classList.remove('navbar-shadow');
    }
  });

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

 // Ambil elemen gambar
 const animatedImage = document.querySelector('.animated-image');

 // Fungsi untuk memeriksa apakah elemen dalam viewport
 function isInViewport(element) {
     const rect = element.getBoundingClientRect();
     return (
         rect.top >= 0 &&
         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
     );
 }



// Ambil semua elemen gambar yang ingin dianimasikan
const animatedImages = document.querySelectorAll('.animated-image');

// Fungsi untuk mengecek apakah elemen dalam viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fungsi untuk menangani peristiwa scroll
function handleScroll() {
    animatedImages.forEach(img => {
        if (isInViewport(img)) {
            img.classList.add('animate'); // Tambahkan kelas animasi jika dalam viewport
        } else {
            img.classList.remove('animate'); // Hapus kelas animasi jika tidak dalam viewport
        }
    });
}

// Tambahkan event listener untuk scroll
window.addEventListener('scroll', handleScroll);

// Function to animate counting
function animateValue(element, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(function() {
        current += increment;
        element.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Select all elements with class 'count-to' and animate them
let countElements = document.querySelectorAll('.count-to');
countElements.forEach(element => {
    let startCount = 0; // Start counting from 0
    let endCount = parseInt(element.textContent); // Get the end count from the element's text content
    let animationDuration = 2000; // Animation duration in milliseconds
    animateValue(element, startCount, endCount, animationDuration);
});

// Select all elements with class 'count-to2' and animate them
let countBeda = document.querySelectorAll('.count-to2');
countBeda.forEach(element => {
    let startCount = 3000; // Start counting from 2800
    let endCount = parseInt(element.textContent); // Get the end count from the element's text content
    let animationDuration = 1000; // Animation duration in milliseconds (1 second)
    animateValue(element, startCount, endCount, animationDuration);
});



    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', handleScroll);
    
    // Panggil handleScroll pada saat memuat halaman untuk memeriksa posisi awal
    handleScroll();
    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);


    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.add('mt-3', 'mb-3');
    });

});


let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}


$(function () {
    $('.genealogy-tree ul').hide();
    $('.genealogy-tree>ul').show();
    $('.genealogy-tree ul.active').show();
    $('.genealogy-tree li').on('click', function (e) {
        var children = $(this).find('> ul');
        if (children.is(":visible")) children.hide('fast').removeClass('active');
        else children.show('fast').addClass('active');
        e.stopPropagation();
    });
});