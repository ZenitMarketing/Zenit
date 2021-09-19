const body = document.querySelector('body');
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade')
const mobileLinks = document.querySelectorAll('.links-mobile li a')

const openCloseMobileMenu = () => {
  if (header.classList.contains('open')) {
    body.classList.remove('noscroll')
    header.classList.remove('open')
    fadeElems.forEach((el) => {
      el.classList.add('fade-out')
      el.classList.remove('fade-in')
    })
  } else {
    body.classList.add('noscroll')
    header.classList.add('open')
    fadeElems.forEach((el) => {
      el.classList.add('fade-in')
      el.classList.remove('fade-out')
    })
  }
 
}

btnHamburger.addEventListener('click', openCloseMobileMenu);

mobileLinks.forEach((link) => {
  link.addEventListener('click', openCloseMobileMenu);
})

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function toggleStickyHeader() {
  if (window.pageYOffset > sticky + 52) {
    header.classList.add("header-sticky");
  } else {
    header.classList.remove("header-sticky");
  }
}

window.onscroll = () => {
  toggleStickyHeader();
}

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('#clients-slider', {
    type: 'loop',
	  perPage: 6,
    pagination: false,
    perMove: 1,
    breakpoints: {
      576: {
        perPage: 1,
      },
      768: {
        perPage: 3,
      },
    }
  }).mount();

  new Splide('#hero-slider', {
    type: 'fade',
    rewind: true,
    arrows: false,
    autoplay: true,
  }).mount();
} );