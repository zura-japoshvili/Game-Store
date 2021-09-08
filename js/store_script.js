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

const burger_icon = document.querySelector(".burger-icon-l");
const active_burger = document.getElementById("active-burger");
const side_nav = document.getElementById("side-nav");
burger_icon.addEventListener("click", function(){
  side_nav.classList.add("side-nav-active");
  burger_icon.style.visibility = "hidden";
});
active_burger.addEventListener("click", function(){
  side_nav.classList.remove("side-nav-active");
  burger_icon.style.visibility = "visible";
});

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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
  ]
});


