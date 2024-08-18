// ! Owl Slider Logic
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  item: 4,
  center: true,
  // rewind: true,
  startPosition: 0,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
      // nav:true
    },
    600: {
      items: 3,
      // nav:false
    },
    1920: {
      items: 2,
      nav: false,
      loop: true,
    },
  },
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
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className = "tab-active tablinks ";
}

// ! Aos Library Init
AOS.init();

fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => console.log(data[0].items));
