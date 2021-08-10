let sign_in = document.getElementById("sign-in");
let sign_in_cont = document.getElementById("sign-in-cont");
let sign_up = document.getElementById("sign-up");
let sign_up_cont = document.getElementById("sign-up-cont");
sign_in.addEventListener("click", function () {
  sign_in_cont.classList.toggle("sign-in-active");
  sign_up_cont.classList.remove("sign-up-cont-active");
});
sign_up.addEventListener("click", function () {
  sign_up_cont.classList.toggle("sign-up-cont-active");
  sign_in_cont.classList.remove("sign-in-active");
});
let x_exit = document.getElementById("x-for-exit");
x_exit.addEventListener("click", function () {
  sign_up_cont.classList.remove("sign-up-cont-active");
});

$(".autoplay").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
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
