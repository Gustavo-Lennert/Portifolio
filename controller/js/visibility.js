
//Apresentação de grid incial
window.onload = function() {
  let text = document.querySelector(".text-intro");
  let img = document.querySelector(".details-img")

  img.style.animation = "Fade2 1.5s ease-out";
  text.style.animation = "Fade3 1.5s ease-out ";
}


//Apresentação de contéudo suave por scroll - biblioteca ScrollReveal
window.sr = ScrollReveal({ 
  reset:true 
});


// Função para verificar a posição do scroll
function animationIcons() {

  // Obter a altura da janela de visualização
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // Obter a posição atual do scroll vertical
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  // Calcular o valor do meio da área visível na tela
  var middlePosition = scrollTop + (windowHeight / 2);


  //Recepção de titulo das seções
  // -- Competências
  let titleCompt = document.querySelector(".title-compt");
  let iconTitleCompt = document.querySelector(".icon-compt");
  let contentFormation = document.querySelector(".content-formation");
 

  // -- Formação
  let titleForm = document.querySelector(".title-formation");
  let iconTitleForm = document.querySelector(".icon-title");

  //Recepção de elementos(icones)
  let html = document.getElementById("barra-html");
  let css = document.getElementById("barra-css");
  let bootstrap = document.getElementById("barra-bootstrap");
  let js = document.getElementById("barra-js");
  let java = document.getElementById("barra-java");
  let php = document.getElementById("barra-php");
  let c = document.getElementById("barra-c");
  let angular = document.getElementById("barra-angular");
  let spring = document.getElementById("barra-spring");
  let sql = document.getElementById("barra-sql");
  let git = document.getElementById("barra-git");

  //Valores de distância dos elementos ao topo da página:
  //Títulos
  let titleComptTop = titleCompt.offsetTop;
  let titleFormTop = titleForm.offsetTop;

  //Ícones
  let htmlTop = html.offsetTop;
  let cssTop = css.offsetTop;
  let bootstrapTop = bootstrap.offsetTop;
  let jsTop = js.offsetTop;
  let javaTop = java.offsetTop;
  let phpTop = php.offsetTop;
  let cTop = c.offsetTop;
  let angularTop = angular.offsetTop;
  let springTop = spring.offsetTop;
  let sqlTop = sql.offsetTop;
  let gitTop = git.offsetTop;


  // Verificar se a posição do scroll atingiu o ponto desejado
  //Competências
  if (middlePosition >= titleComptTop - 350) { 
    titleCompt.style.animation = "Fade 2s ease";
    titleCompt.style.opacity = 1;
    iconTitleCompt.style.animation = "Fade 2s ease";
    iconTitleCompt.style.opacity = 1;
    contentFormation.style.animation = "Fade 2s ease";
    contentFormation.style.opacity = 1;
  } 

  //Formação
  if (middlePosition >= titleFormTop - 350) { 
    titleForm.style.animation = "Fade 2s ease";
    titleForm.style.opacity = 1;
    iconTitleForm.style.animation = "Fade 2s ease";
    iconTitleForm.style.opacity = 1;
  }

  //Ícones
  if (middlePosition >= htmlTop - 350) { 
    html.style.backgroundColor = "#ff4000";
    html.style.animation = "animate-positive 2s";
    html.style.width = "88%";
  }

  if (middlePosition >=  cssTop - 350) { 
    css.style.backgroundColor = "#008cff";
    css.style.animation = "animate-positive 2s";
    css.style.width = "88%";
  }

  if (middlePosition >=  bootstrapTop - 350) { 
    bootstrap.style.backgroundColor = "#652985c1";
    bootstrap.style.animation = "animate-positive 2s";
    bootstrap.style.width = "85%";
  }

  if (middlePosition >=  jsTop - 350) { 
    js.style.backgroundColor = "#f8e800";
    js.style.animation = "animate-positive 2s";
    js.style.width = "72%";
  }

  if (middlePosition >=  javaTop - 350) { 
    java.style.backgroundColor = "#bc2c04";
    java.style.animation = "animate-positive 2s";
    java.style.width = "65%";
  }

  if (middlePosition >=  phpTop - 350) { 
    php.style.backgroundColor = "#b2b2ff";
    php.style.animation = "animate-positive 2s";
    php.style.width = "55%";
  }

  if (middlePosition >=  cTop - 350) { 
    c.style.backgroundColor = "#101d83";
    c.style.animation = "animate-positive 2s";
    c.style.width = "75%";
  }

  if (middlePosition >=  springTop - 350) { 
    spring.style.backgroundColor = "#049304";
    spring.style.animation = "animate-positive 2s";
    spring.style.width = "42%";
  }

  if (middlePosition >=  angularTop - 350) { 
    angular.style.backgroundColor = "red";
    angular.style.animation = "animate-positive 2s";
    angular.style.width = "42%";
  }

  if (middlePosition >=  sqlTop - 350) { 
    sql.style.backgroundColor = "#2b3e8c";
    sql.style.animation = "animate-positive 2s";
    sql.style.width = "70%";
  }

  if (middlePosition >=  gitTop - 350) { 
    git.style.backgroundColor = "#d13400";
    git.style.animation = "animate-positive 2s";
    git.style.width = "48%";
  }

}
// Chamada da função acima
window.addEventListener('scroll', animationIcons);


//Inicio
sr.reveal('.grid-perfil', {duration: 1000});
sr.reveal('.arrow-scroll', {duration: 3000});

//Sobre
sr.reveal('.icon-about', {duration: 1500});
sr.reveal('.box-formation', {duration: 2000});



//Contato



//Função seta para baixo
const arrow = document.getElementById("arrow");
let about = document.getElementById('sobre').offsetTop;
arrow.addEventListener('click', () => {

  
  smoothScrollTo(0, (about - 76), 340);
});


//Rolagem suave links menu
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function getDistanceFromTheTop(element){
  console.log(element);
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function  scrollToSection(event){
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target);
  smoothScrollTo(0, (distanceFromTheTop - 76), 100);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});


//Função de recriação de movimento scroll suave - smoothScroll
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}