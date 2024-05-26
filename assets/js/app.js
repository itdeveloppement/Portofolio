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

/* card 1 
document.querySelector(".container__card-1").addEventListener("mouseover",() => {
  document.querySelector(".container__filter-opa-1").style.opacity = '1';
  document.querySelector(".container__filter-opa-1").style.transition = 'opacity 0.5s ease';
});
document.querySelector(".container__card-1").addEventListener("mouseout",() => {
  document.querySelector(".container__filter-opa-1").style.opacity = '0';
}); */
/* card 2
document.querySelector(".container__card-2").addEventListener("mouseover",() => {
  document.querySelector(".container__filter-opa-2").style.opacity = '1';
  document.querySelector(".container__filter-opa-2").style.transition = 'opacity 0.5s ease';
});

document.querySelector(".container__card-2").addEventListener("mouseout",() => {
  document.querySelector(".container__filter-opa-2").style.opacity = '0';
});  */


//AFFICHAGE LES CARD PROJET 

// recuperation des données au format json
fetch("./assets/json/projets.json")
.then (response=>{
    return response.json()
})
.then (response=>{
  templateProjet (response) 
})

/** affiche le template projet
 * 
 * @param {Objet} tabProduitReference 
 */
function templateProjet (datasProjet) {
  // code a reprendre car pas besoin de passer la ref de projet en parametre // faire en css avec un hover     

  template='';
  datasProjet.forEach(data=>{
 
  template += 
  `
    <div class="container__card container__card-${data.refProjet} large-4 medium-12" onmouseover="styleOpacityOver('${data.refProjet}')" onmouseout="styleOpacityOut('${data.refProjet}')" >
        <img src="./assets/images/projets/${data.images[0].name}">
        <div class="container__filter-fix container__filter-bgk-3"><p class="container__filter-fix-para">${data.nameProjet}</p></div>
        <div class="container__filter-moove  container__filter-opa-${data.refProjet} container__filter-display flex">
            <p class="container__filter-para-moove">${data.presentationProjet}</p>
            <a class="container__filter-btn-moove link" href="https://itdeveloppement.github.io/Portofolio/projet.html?ref=${data.refProjet}">Decouvrir le projet</a>
        </div>
    </div>
  `
}); 
  // ciblage et creation dom
  let projet = document.querySelector(".projet__container");
  projet.innerHTML = template;

}
// 
/** definit dans le html le style opacity et transition
 * 
 * @param {string} refProjet la reference du projet
 */
function styleOpacityOver(refProjet) {
  document.querySelector(`.container__filter-opa-${refProjet}`).style.opacity = '1';
  document.querySelector(`.container__filter-opa-${refProjet}`).style.transition = 'opacity 0.8s ease';
}
/** definit dans le html le style opacity et transition
 * 
 * @param {string} refProjet la reference du projet
 */
function styleOpacityOut(refProjet) {
  document.querySelector(`.container__filter-opa-${refProjet}`).style.opacity = '0';
  document.querySelector(`.container__filter-opa-${refProjet}`).style.transition = 'opacity 0.8s ease';
}
