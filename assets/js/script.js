function openNavbar() {
  document.getElementById("sidenav").style.display = "block";
  document.getElementById("sidenav").style.width = "100%";
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
      slidesPerView: 1,
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

$('#carousel1').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}
});
$('#carousel2').owlCarousel({
  loop:true,
  nav:false,
  margin:10,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});
  var owl = $("#carousel1");
  owl.owlCarousel();
  $(".fa-arrow-right").click(function(){
    owl.trigger('next.owl.carousel');
    console.log("yaleeeeeeel");
  });

  $(".fa-arrow-left").click(function(){
    owl.trigger("prev.owl.carousel");
    console.log("yaleeeeeeel");
  });
  var owl2 = $("#carousel2");
  owl2.owlCarousel();
  $(".fa-arrow-right").click(function(){
    owl2.trigger('next.owl.carousel');
    console.log("yaleeeeeeel");
  });

  $(".fa-arrow-left").click(function(){
    owl2.trigger("prev.owl.carousel");
    console.log("yaleeeeeeel");
  });

