$('#carousel1').owlCarousel({
    rtl:true,
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
    rtl:true,
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
  });

  $(".fa-arrow-left").click(function(){
    owl.trigger("prev.owl.carousel");
  });
  var owl2 = $("#carousel2");
  owl2.owlCarousel();
  $(".swiper-button-next").click(function(){
    owl2.trigger('next.owl.carousel');
  });

  $(".swiper-button-prev").click(function(){
    owl2.trigger("prev.owl.carousel");
  });