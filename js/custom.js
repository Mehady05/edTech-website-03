$(function(){

    $(".slide-wrap").slick({
      arrows: true,
      nextArrow:'.right-btn',
      prevArrow:'.left-btn',
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      });

      $('.company-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

});