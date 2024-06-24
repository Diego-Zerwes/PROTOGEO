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


const btnMobile = document.getElementById('checkbox-menu');

function toggleMenu(event) {

  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav1');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.classList.toggle('active');

  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);


const hiddenElements = document.querySelectorAll(".hidden");

const intersectionObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    const isVisible = entry.isIntersecting;
    toggleVisibility(entry.target, isVisible);

  });
});



hiddenElements.forEach((element)=>intersectionObserver.observe(element))

const toggleVisibility = (element, isVisible) => {
  if (isVisible){
    element.classList.add("show");
  }else{
    element.classList.remove("show");
  }
}


const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function getDistanceFromTheTop(element){
  const id = element.getAttribute("href");
  if (id) {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      return targetElement.offsetTop;
    }
  }
  return null; 
}

function nativeScroll(distanceFromTheTop){
  window.scroll({
    top: distanceFromTheTop,
    behavior: "smooth",
  });
}

function scrollToSection(event){
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
  nativeScroll(distanceFromTheTop);
}

menuLinks.forEach((link) =>{
  link.addEventListener("click", scrollToSection);
})

const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}


const faqs = document.querySelectorAll(".perguntasFrequentes");

faqs.forEach(perguntasFrequentes => {
  perguntasFrequentes.addEventListener("click", () => {
    perguntasFrequentes.classList.toggle("active");
  });
});



const popUp = document.getElementById("pop-up")
const modal = document.getElementById("dialog")
const botaoFechar = document.getElementById("botao-fechar")

popUp.onclick =  function(){
  modal.showModal()
}

botaoFechar.onclick = function(){
  modal.close()
}