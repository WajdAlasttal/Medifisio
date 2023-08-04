$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
}
);
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
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
    const toggleButton = document.getElementById("rtl-ltr-toggle");

    toggleButton.addEventListener("click", function() {
        const currentDir = document.body.getAttribute("dir");
        const newDir = currentDir === "rtl" ? "ltr" : "rtl";
        document.body.setAttribute("dir", newDir);
    });
});
