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