let active_cont = document.getElementById("active-cont");
function mouseOverFunc() {
  active_cont.style.display = "flex";
}
function mouseOutFunc() {
  active_cont.style.display = "none";
}

let active_icon = document.getElementById("active-icon");
let offline_icon = document.getElementById("offline-icon");
function activeClickFunc(arg) {
  if (arg === "active") {
    active_icon.style.visibility = "visible";
    offline_icon.style.visibility = "hidden";
  } else {
    active_icon.style.visibility = "hidden";
    offline_icon.style.visibility = "visible";
  }
}
let fg_list = document.getElementById("fg-list");
let ag_list = document.getElementById("ag-list");
let fg_arrow = document.getElementById("arrow-fg");
let ag_arrow = document.getElementById("arrow-ag");
fg_arrow.addEventListener("click", function () {
  fg_arrow.classList.toggle("active-arrow");
  fg_list.classList.toggle("dn");
});
ag_arrow.addEventListener("click", function () {
  ag_arrow.classList.toggle("active-arrow");
  ag_list.classList.toggle("dn");
});

const showGames = document.querySelector(".show-games");
const aside_cont = document.querySelector(".aside-cont");
const side_nav = document.getElementById("side-nav");
showGames.addEventListener("click",function(){
  aside_cont.classList.toggle("aside-cont-show");
});

const burger_icon = document.querySelector(".burger-icon-l");
const active_burger = document.getElementById("active-burger");
burger_icon.addEventListener("click", function(){
  side_nav.classList.add("side-nav-active");
  burger_icon.style.visibility = "hidden";
});
active_burger.addEventListener("click", function(){
  side_nav.classList.remove("side-nav-active");
  burger_icon.style.visibility = "visible";
});


$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: false
});
$(".responsive").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});