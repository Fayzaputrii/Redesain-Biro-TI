/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/


window.addEventListener('DOMContentLoaded', event => {

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function activateNavLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 60) { 
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
    activateNavLink(); 
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


 const animatedImage = document.querySelector('.animated-image');

 function isInViewport(element) {
     const rect = element.getBoundingClientRect();
     return (
         rect.top >= 0 &&
         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
     );
 }



const animatedImages = document.querySelectorAll('.animated-image');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// scroll
function handleScroll() {
    animatedImages.forEach(img => {
        if (isInViewport(img)) {
            img.classList.add('animate');
        } else {
            img.classList.remove('animate'); 
        }
    });
}


window.addEventListener('scroll', handleScroll);

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

let countElements = document.querySelectorAll('.count-to');
countElements.forEach(element => {
    let startCount = 0; 
    let endCount = parseInt(element.textContent); 
    let animationDuration = 2000; 
    animateValue(element, startCount, endCount, animationDuration);
});
let countBeda = document.querySelectorAll('.count-to2');
countBeda.forEach(element => {
    let startCount = 3000;
    let endCount = parseInt(element.textContent);
    let animationDuration = 1000;
    animateValue(element, startCount, endCount, animationDuration);
});

window.addEventListener('scroll', handleScroll);

handleScroll();
navbarShrink();

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