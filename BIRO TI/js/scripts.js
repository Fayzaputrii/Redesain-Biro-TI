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



 

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', handleScroll);
    
    // Panggil handleScroll pada saat memuat halaman untuk memeriksa posisi awal
    handleScroll();
    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
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

    // Add margin to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.add('mt-3', 'mb-3');
    });

});
