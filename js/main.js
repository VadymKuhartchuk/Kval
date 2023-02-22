const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBeteen: 20,
  
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },

  });



const mobileMenu = document.querySelector('.mobile-menu'); 
const menuClose = document.querySelector('.mobile-menu__link--close');
const burgerMenu = document.querySelector('.nav__burger');

menuClose.onclick = function(){
    mobileMenu.style.display="none";
}

burgerMenu.onclick = function(){
    mobileMenu.style.display="flex";
}
