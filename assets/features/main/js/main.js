$('#owl-one').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 10000,
  smartSpeed: 900,
  navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
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

$('#owl-two').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: false,
  autoplayTimeout: 10000,
  smartSpeed: 900,
  navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
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

$('#owl-three').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: false,
  autoplayTimeout: 10000,
  smartSpeed: 900,
  navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
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

var loader = '.loader';
$(window).on('load', function () {
  $(loader).addClass('right');
  // index & common sections
  if ($(window).width() >= 992) {
    ScrollReveal().reveal('.tag', {
      interval: 6,
      duration: 1000
    });
    ScrollReveal().reveal('.article', {
      interval: 6,
      duration: 1500,
      origin: 'top',
      scale: 0.8
    });
    ScrollReveal().reveal('.articles-tabs', {
      interval: 6,
      duration: 1500,
      origin: 'top',
      scale: 0.7
    });
    var fancyBtn2 = {
      delay: 300,
      duration: 1500,
      origin: 'top',
      distance: '40px'
    }
    ScrollReveal().reveal('.fancy-btn-2', fancyBtn2);
    var bannerImg = {
      delay: 400,
      duration: 1500,
      origin: 'bottom',
      distance: '40px',
    };
    ScrollReveal().reveal('.banner-img', bannerImg);
    var pagination = {
      delay: 200,
      duration: 1500,
      origin: 'bottom',
      distance: '40px',
      scale: 0.7
    };
    ScrollReveal().reveal('.pagination', pagination);
    var bannerDetail = {
      delay: 700,
      duration: 1500,
      origin: 'left',
      distance: '70px',
      scale: 0.8
    };
    ScrollReveal().reveal('.banner-detail', bannerDetail);
    ScrollReveal().reveal('.side-menu', bannerDetail);
    var form = {
      delay: 300,
      duration: 1500,
      origin: 'top',
      distance: '70px',
      scale: 0.8
    };
    ScrollReveal().reveal('.form-main', form);
    ScrollReveal().reveal('#accordion', form);
    ScrollReveal().reveal('.service-tariffs-content', form);
    ScrollReveal().reveal('#owl-three', form);
    var traveller = {
      delay: 200,
      duration: 1800,
      scale: 0.1
    };
    ScrollReveal().reveal('.traveller', traveller);
    var circle = {
      delay: 300,
      duration: 1500,
      scale: 0.4
    };
    ScrollReveal().reveal('.circle', circle);
    ScrollReveal().reveal('.group-circles', circle);
    ScrollReveal().reveal('.boy-top', circle);
    ScrollReveal().reveal('.boy-bottom', circle);
    var allTypes = {
      delay: 500,
      duration: 1500,
      origin: 'top',
      distance: '80px',
      scale: 0.7
    };
    ScrollReveal().reveal('.normal-type', allTypes);
    ScrollReveal().reveal('.genius-type', allTypes);
    ScrollReveal().reveal('.motion-graphic', allTypes);
    var skillsItmes = {
      duration: 1500,
      delay: 500,
      scale: 0.5
    };
    ScrollReveal().reveal('.skills-items', skillsItmes);
    var todoItems = {
      duration: 1500,
      delay: 500,
      scale: 0.5
    };
    ScrollReveal().reveal('.todo-items', todoItems);
    var fancyDividerCommon = {
      duration: 1500,
      delay: 400,
      origin: 'left',
      distance: '50px',
      scale: 0.5
    };
    ScrollReveal().reveal('.fancy-divider-common', fancyDividerCommon);
    var sponsersImg = {
      duration: 1500,
      delay: 600,
      scale: 0.3
    };
    ScrollReveal().reveal('.sponser-img', sponsersImg);
    var information = {
      duration: 1000,
      delay: 600,
      origin: 'top',
      distance: '50px',
      scale: 0.5
    };
    ScrollReveal().reveal('.information', information);
    ScrollReveal().reveal('.contact-us-footer', information);
    var copyright = {
      duration: 1000,
      delay: 400,
      origin: 'bottom',
      distance: '50px',
      scale: 0.8
    };
    ScrollReveal().reveal('.copyright', copyright);
  }
});


$(document).ready(function () {
  $('a.traveller').on('click', function (e) {
    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);
    // pindahkan scroll
    $('html, body').animate({
      scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'swing');
    e.preventDefault();
  });
});


// ===== Scroll to Top ==== 
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(200); // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(200); // Else fade out the arrow
  }
});
$('#return-to-top').click(function () { // When arrow is clicked
  $('body,html').animate({
    scrollTop: 0 // Scroll to top of body
  }, 500);
});

if (ScrollReveal().noop) {
  console.log('ScrollReveal is non-operational!');
}