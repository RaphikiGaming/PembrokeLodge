function book(){
  alert("Thanks for your trust but this page is used as an illustration for an english final task.");
}


var btn_slider_l = document.querySelector(".btn-slider-left");
var btn_slider_r = document.querySelector(".btn-slider-right");
var c_img = document.querySelector(".c_slider").querySelector(".c_texte");
var c_img2 = document.querySelector(".c_slider2").querySelector(".c_img");

var numb_img = 5; /*mettre le nombre d'images du slider*/
var color = "#D81E5B"; /*mettre couleur choisie pour les controls*/

var circle1 = document.querySelector(".circle1");// ajouter 1 variable pour chaque cercles
var circle2 = document.querySelector(".circle2");// ajouter 1 variable pour chaque cercles
var circle3 = document.querySelector(".circle3");// ajouter 1 variable pour chaque cercles
var circle4 = document.querySelector(".circle4");// ajouter 1 variable pour chaque cercles
var circle5 = document.querySelector(".circle5");// ajouter 1 variable pour chaque cercles

var numb_circle = 1; /*mettre à la slide par défaut*/

slideLoop();

btn_slider_l.addEventListener("click", () => {
  numb_circle = numb_circle - 1;
  slideLoop();
})

btn_slider_r.addEventListener("click", () => {
  numb_circle = numb_circle + 1;
  slideLoop();
})

// une fonction par cercles
// ajustez numb_circle
circle1.addEventListener("click", () => {
  numb_circle = 1;
  slideLoop();
})

circle2.addEventListener("click", () => {
  numb_circle = 2;
  slideLoop();
})

circle3.addEventListener("click", () => {
  numb_circle = 3;
  slideLoop();
})

circle4.addEventListener("click", () => {
  numb_circle = 5;
  slideLoop();
})

circle5.addEventListener("click", () => {
  numb_circle = 5;
  slideLoop();
})

// fonction finale (changement de slide)
function slideLoop(){
  // une condition par image et cercles
  // pensez à ajuster le code des conditions pour chaque "item"(backgroundColor, left)
  if(numb_circle == 2){
    circle1.style.backgroundColor = "inherit";
    circle2.style.backgroundColor = color;
    circle3.style.backgroundColor = "inherit";
    circle4.style.backgroundColor = "inherit";
    circle5.style.backgroundColor = "inherit";
    c_img.style.left = -100 + "%";
    c_img2.style.left = -100 + "%";
  }
  if(numb_circle == 3){
    circle1.style.backgroundColor = "inherit";
    circle2.style.backgroundColor = "inherit";
    circle3.style.backgroundColor = color;
    circle4.style.backgroundColor = "inherit";
    circle5.style.backgroundColor = "inherit";
    c_img.style.left = -200 + "%";
    c_img2.style.left = -200 + "%";
  }
  if(numb_circle == 4){
    circle1.style.backgroundColor = "inherit";
    circle2.style.backgroundColor = "inherit";
    circle3.style.backgroundColor = "inherit";
    circle4.style.backgroundColor = color;
    circle5.style.backgroundColor = "inherit";
    c_img.style.left = -300 + "%";
    c_img2.style.left = -300 + "%";
  }
  if(numb_circle == 5){
    circle1.style.backgroundColor = "inherit";
    circle2.style.backgroundColor = "inherit";
    circle3.style.backgroundColor = "inherit";
    circle4.style.backgroundColor = "inherit";
    circle5.style.backgroundColor = color;
    c_img.style.left = -400 + "%";
    c_img2.style.left = -400 + "%";
  }
  if(numb_circle == 1){
    circle1.style.backgroundColor = color;
    circle2.style.backgroundColor = "inherit";
    circle3.style.backgroundColor = "inherit";
    circle4.style.backgroundColor = "inherit";
    circle5.style.backgroundColor = "inherit";
    c_img.style.left = 0 + "%";
    c_img2.style.left = 0 + "%";
  }

  // ne pas changer celles-ci :
  if(numb_circle < 1){
    numb_circle = numb_img;
    slideLoop();
  }
  if(numb_circle > numb_img){
    numb_circle = 1;
    slideLoop();
  }
}
