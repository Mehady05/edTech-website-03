$(function(){

    $(".slide-wrap").slick({
      arrows: true,
      nextArrow:'.right-btn',
      prevArrow:'.left-btn',
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        }]
      });

      $('.company-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

});