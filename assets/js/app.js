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

// FILTRE SECTION TRAVAIL RECENT

/* card 1 */
document.querySelector(".container__card-1").addEventListener("mouseover",() => {
  document.querySelector(".container__filter-opa-1").style.opacity = '1';
});
document.querySelector(".container__card-1").addEventListener("mouseout",() => {
  document.querySelector(".container__filter-opa-1").style.opacity = '0';
});
/* card 2 */
document.querySelector(".container__card-2").addEventListener("mouseover",() => {
  document.querySelector(".container__filter-opa-2").style.opacity = '1';
});
document.querySelector(".container__card-2").addEventListener("mouseout",() => {
  document.querySelector(".container__filter-opa-2").style.opacity = '0';
});
/* card 3 */
document.querySelector(".container__card-3").addEventListener("mouseover",() => {
  document.querySelector(".container__filter-opa-3").style.opacity = '1';
});
document.querySelector(".container__card-3").addEventListener("mouseout",() => {
  document.querySelector(".container__filter-opa-3").style.opacity = '0';
});
/* card 4 */
document.querySelector(".container__card-4").addEventListener("mouseover",() => {
  document.querySelector(".container__filter-opa-4").style.opacity = '1';
});
document.querySelector(".container__card-4").addEventListener("mouseout",() => {
  document.querySelector(".container__filter-opa-4").style.opacity = '0';
});
/* card 5 */
document.querySelector(".container__card-5").addEventListener("mouseover",() => {
  document.querySelector(".container__filter-opa-5").style.opacity = '1';
});
document.querySelector(".container__card-5").addEventListener("mouseout",() => {
  document.querySelector(".container__filter-opa-5").style.opacity = '0';
});
/* card 6 */
document.querySelector(".container__card-6").addEventListener("mouseover",() => {
  document.querySelector(".container__filter-opa-6").style.opacity = '1';
});
document.querySelector(".container__card-6").addEventListener("mouseout",() => {
  document.querySelector(".container__filter-opa-6").style.opacity = '0';
});
/* card 7 */
document.querySelector(".container__card-7").addEventListener("mouseover",() => {
  document.querySelector(".container__filter-opa-7").style.opacity = '1';
});
document.querySelector(".container__card-7").addEventListener("mouseout",() => {
  document.querySelector(".container__filter-opa-7").style.opacity = '0';
});
/* card 8 */
document.querySelector(".container__card-8").addEventListener("mouseover",() => {
  document.querySelector(".container__filter-opa-8").style.opacity = '1';
});
document.querySelector(".container__card-8").addEventListener("mouseout",() => {
  document.querySelector(".container__filter-opa-8").style.opacity = '0';
});
/* card 9 */
document.querySelector(".container__card-9").addEventListener("mouseover",() => {
  document.querySelector(".container__filter-opa-9").style.opacity = '1';
});
document.querySelector(".container__card-9").addEventListener("mouseout",() => {
  document.querySelector(".container__filter-opa-9").style.opacity = '0';
});