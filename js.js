console.log("JewelOsco");

var afbeeldingen = document.querySelectorAll('.pagina2 main section:nth-of-type(4) img');
var proost = document.querySelector('.pagina2 main section:nth-of-type(4) h3');

function proosten() {

  afbeeldingen[0].style.transform = 'translateX(93px) rotate(15deg)';

  afbeeldingen[1].style.transform = 'translateX(-93px) rotate(-15deg)';


  setTimeout(function () {
    afbeeldingen[0].style.transform = 'translateX(0)';
    afbeeldingen[1].style.transform = 'translateX(0)';
  }, 700);
}

proost.addEventListener("mouseover", proosten);
