// CHANGEMENT TYPO
document.getElementById("btn-typo").addEventListener("click", changeTypo);
// changement de la typo du site modal
let modal = document.querySelector(".header-modal");
modal.addEventListener("click", changeTypo);

/** change typo du site
 *  @param {*} // pas de parametre
 *  @return ne retourne rien
 */
function changeTypo() {
    // ciblage
    let body = document.querySelector("body");
    let btnTypo = document.getElementById("btn-typo");
    // ajout de classe
    body.classList.toggle("newTypo");
    btnTypo.classList.toggle("newTypo");
}

// MODALE HEADER

// ouverture et fermeture burger et modale au click
document.querySelector(".hamburger").addEventListener("click", ()=> {
    openModal()
});

/** ouverture et fermeture burger et modale
 *  @param {*} // pas de parametre
 *  @return ne retourne rien 
 */
function openModal () {
    let modale = document.querySelector(".header-modal");
    modale.classList.toggle("header-modal--is-open");
    let burger = document.querySelector(".header-burger");
    burger.classList.toggle("is-active");
}



// carousel swiper
/*
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  console.log("test dans app.js")
  */