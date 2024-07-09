// ! Owl Slider Logic
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    item: 4,
    center: true,
    startPosition: 0,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
      0: {
        items: 1,
        // nav:true
      },
      600: {
        items: 1,
        // nav:false
      },
      1920: {
        items: 2,
        nav: false,
        loop: true,
      },
    },
  });