// ! Type Writer Logic
let i = 0;
let txt = "عضو خبرنامه ما شوید";
let speed = 100;
let delay = 2000;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type-writer").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      i = 0;
      document.getElementById("type-writer").innerHTML = "";
      typeWriter();
    }, delay);
  }
}
typeWriter();