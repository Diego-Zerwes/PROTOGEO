$(window).on('scroll', function () {
  if ($(window).scrollTop() > 0) {
      $('nav').addClass('colored');
      
  } else {
      $("nav").removeClass('colored');
  }
})

function mostraSub(sub,protogeo){
  subfilho = document.getElementById(sub);
  subfilho.style.display = 'block';
}

function escondeSub(sub,protogeo){
  subfilho = document.getElementById(sub);
  subfilho.style.display = 'none'; 
}

// function mostraNavBar(navBar){
//   subfilho = document.getElementById(navBar);
//   subfilho.style.display = 'block';
// }

// function esconderNavBar(navBar){
//   subfilho = document.getElementById(navBar);
//   subfilho.style.display = 'none'; 
// }
// const btnMobile = document.getElementById('checkbox-menu');
// function toggleMenu(){
//   const btnMobile = document.getElementById('nav1');
//   nav.classList.toggle('active');
// }

// btnMobile.addEventListener('click',toggleMenu);

const btnMobile = document.getElementById('checkbox-menu');

function toggleMenu(event) {

  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav1');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.classList.toggle('active');

  //event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
//btnMobile.addEventListener('touchstart', toggleMenu);