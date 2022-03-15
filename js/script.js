const sliderMain = new Swiper(".slider_main", {
  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  parallax: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    },
  },
});

const sliderBg = new Swiper(".slider_bg", {
  centeredSlides: true,
  parallax: true,
  spaceBetween: 60,
  slidesPerView: 3.5,
});

sliderMain.controller.control = sliderBg;

document.querySelectorAll(".slider__item").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("opened");
  });
});

let desc = document.querySelector(".description");
sliderMain.on("slideChange", (e) => {
  sliderMain.activeIndex > 0
    ? desc.classList.add("hidden")
    : desc.classList.remove("hidden");
});

let music = document.getElementById("music");
let isPlaying = false;
music.volume = 0.2;
function togglePlay() {
  if (isPlaying) {
    music.pause();
  } else {
    music.play();
  }
}
music.onplaying = function () {
  isPlaying = true;
  document.getElementById("music-animation").classList.add("on");
};
music.onpause = function () {
  isPlaying = false;
  document.getElementById("music-animation").classList.remove("on");
};

let button = document.getElementById("toggle");
button.addEventListener(
  "click",
  function () {
    if (button.getAttribute("data-text-swap") == button.innerHTML) {
      button.innerHTML = button.getAttribute("data-text-original");
    } else {
      button.setAttribute("data-text-original", button.innerHTML);
      button.innerHTML = button.getAttribute("data-text-swap");
    }
  },
  false
);
