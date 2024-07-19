/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

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

// Panggil handleScroll pada saat memuat halaman untuk memeriksa posisi awal
handleScroll();

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
    let startCount = 3000; // Start counting from 3000
    let endCount = parseInt(element.textContent); // Get the end count from the element's text content

    // Calculate the duration proportionally based on the end count
    let maxEndCount = 3324; // Maximum end count among all elements
    let baseDuration = 2000; // Base duration in milliseconds
    let range = endCount - startCount;
    let animationDuration = (range / maxEndCount) * baseDuration;

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
