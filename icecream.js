//navbar
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('.header #menu-btn');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
}


// home swiper 
var swiper = new Swiper(".home-slider",{
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});

//light gallery
lightGallery(document.querySelector('.gallery .gallery-container'));


// reviews swiper 
var swiper = new Swiper(".reviews-slider",{
  grabCursor:true,
  loop:true,
  spaceBetween:20,
  pagination:{
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    0: {
    slidesPerView: 1,
  },
    768: {
    slidesPerView: 2,
  },
    991: {
    slidesPerView: 3,
  },
  }
});
