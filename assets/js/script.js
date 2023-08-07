function openNavbar() {
  document.getElementById("sidenav").style.display = "block";
  document.getElementById("sidenav").style.width = "50%";
}

function closeNavbar() {
  document.getElementById("sidenav").style.width = "0%";
}

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 20,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener("DOMContentLoaded", function() {
  var englishBtn = document.getElementById("englishBtn");
  englishBtn.addEventListener("click", function() {
    window.location.href = "english.html";
    console.log("done")
  });
});
document.addEventListener('DOMContentLoaded',function(){
  var arabicBtn = document.getElementById("arabicBtn");
  arabicBtn.addEventListener("click", function() {
    window.location.href = "arabic.html";
    console.log("done")
  });
});