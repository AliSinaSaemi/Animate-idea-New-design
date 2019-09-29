$('.owl-one').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 10000,
  smartSpeed: 900,
  navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1  
    },
    1000: {
      items: 1
    }
  }
});




function openNav() {
  $('#cssmenu').css('width', '100%');
}

function closeNav() {
  $('#cssmenu').css('width', '0');
}


(function ($) {
  $(document).ready(function () {
    $('#cssmenu li.has-sub>a').on('click', function () {
      $(this).removeAttr('href');
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp();
      } else {
        element.addClass('open');
        element.children('ul').slideDown();
        element.siblings('li').children('ul').slideUp();
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp();
      }
    });
  });
})(jQuery);

