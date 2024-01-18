const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider= document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");

btnRight.addEventListener("click", e => moveToRight())
btnLeft.addEventListener("click", e => moveToLeft())
let operacion = 0;
   widthImg = 100/sliderSection.length;

setInterval(() => {
   moveToRight();
}, 5000);
function moveToRight() {
   operacion = operacion + widthImg
   if (operacion === 100) {
      operacion = 0;
   }
   slider.style.transform = `translate(-${operacion}%)`
   slider.style.transition = "all ease 1.5s"
}
function moveToLeft(){
   operacion = operacion - widthImg
   if (operacion === -widthImg) {
      operacion = widthImg * sliderSection.length - widthImg;
   }
   slider.style.transform = `translate(-${operacion}%)`
   slider.style.transition = "all ease .6s"
}