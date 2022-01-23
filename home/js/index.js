var preloader = document.getElementById('loading');
function loaderFunction(){
  preloader.style.display = 'none';
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("home-logo-img").style.width = "80%";
  } else {
    document.getElementById("home-logo-img").style.width = "100%";
  }
}
var owl = $('.owl-carousel');


owl.owlCarousel({
    loop:true,
    dots:false,
    nav:false,
    margin:100,
    items:3,
    loop: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        780:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true,
        }
    }
})  

$(document).ready(function(){
  
  // Custom Button
  $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  });
  $('.customPreviousBtn').click(function() {
    owl.trigger('prev.owl.carousel');
  });
  
});