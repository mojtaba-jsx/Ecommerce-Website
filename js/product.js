// ! Owl Product Slider Logic
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    item: 1,
    center: true,
    startPosition: 0,
    autoplay: true,
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





// ! Tabs Content Logic
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("tab-active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className = "tab-active tablinks ";
  }