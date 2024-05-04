$(window).on('scroll', function () {
  if ($(window).scrollTop() > 0) {
      $('nav').addClass('colored');
      
  } else {
      $("nav").removeClass('colored');
  }
})

function mostraSub(sub,protogeo){
  subfilho = document.getElementById(sub,protogeo);
  subfilho.style.display = 'block';
}

function escondeSub(sub,protogeo){
  subfilho = document.getElementById(sub,protogeo);
  subfilho.style.display = 'none'; 
}

function mostraNavBar(navBar){
  subfilho = document.getElementById(navBar);
  subfilho.style.display = 'block';
}

function esconderNavBar(navBar){
  subfilho = document.getElementById(navBar);
  subfilho.style.display = 'none'; 
}
