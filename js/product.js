// ! Owl Slider Logic
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    item: 1,
    center: true,
    startPosition: 0,
    // autoplay: true,
    autoplayTimeout: 2500,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:3,
          margin: 30,
      },
      1400:{
          items:1
      }
  }
  });