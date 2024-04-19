$(window).on('scroll', function () {
  if ($(window).scrollTop() > 0) {
      $('nav').addClass('colored');
      
  } else {
      $("nav").removeClass('colored');
  }
})