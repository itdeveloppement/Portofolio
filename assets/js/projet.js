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
    console.log("test")
    let modale = document.querySelector(".header-modal");
    modale.classList.toggle("header-modal--is-open");
    let burger = document.querySelector(".header-burger");
    burger.classList.toggle("is-active");
}

// AFFICHE TEMPLATE PROJET

// recupération des données dans l'url
// recuperation de l'url
let urlCurrent = document.location.href; 
let urlProjet = document.location.search;
// recuperation des information dans l'URL apres le =
let ref = urlProjet.split("=");
let refProjet= ref[1];



// recuperation des données au format json
fetch("./assets/json/projets.json")
.then (response=>{
    return response.json()
  
})
.then (response=>{
    categorieProduit (response) 
})

/** selectionne tous les elements d'un projet en fonction de son nom
 * 
 * @param {Objet} data 
 */
function categorieProduit (datas) {
    // tableau pour recuperer les elements d'un projet 
    let tabEltProjet = [];
    // boucle sur les données json
    datas.forEach(projet => {
    // projet venant des données json
    let nomProjet = projet.refProjet;
    // si valeur de la chaine current est inclus dans la chaine du tableau json
    if (nomProjet.includes(refProjet)){
        // rempli le tableau avec tous les elements de ce projet
        tabEltProjet.push(projet);
        // affichage du template projet
        templateProjet (tabEltProjet);  
        return tabEltProjet;
    }
    });
}
/** creation element DOM pour les images
 * @param {Objet} datasProjet les information d'un projet
 * @returns {Objet} element du DOM
 */
function templateImages(datasProjet) {
    let templateImage ='';
    datasProjet[0].images.forEach(image => {
        templateImage  += `<div class="pjt-slide__container-img large-4 medium-12"><img src="./assets/images/projets/${image.name}" alt="${image.alt}"></div>` 
    });
    return templateImage
}
/** creation element DOM pour les logo des techno
 * @param {Objet} datasProjet les information d'un projet
 * @returns {Objet} element du DOM
 */
function templateTechnos (datasProjet) {
    let templateTechno ='';
    datasProjet[0].technos.forEach(techno => {
        templateTechno  += `<div class="techno__logo "><img src="./assets/images/logo/${techno.name}" alt="${techno.alt}"></div>`
    });
    return templateTechno

}
/** affiche le template projet
 * @param {array} tabProduitReference  tous les elements d'un projet
 * @return nothing
 */
function templateProjet (datasProjet) {
        
    let data = datasProjet[0];
    template='';

    template = 
    `
    <h4 class="title-h4 projet__title-h4">${data.nameProjet}</h4>
    <p class="projet__para">${data.presentationProjet}</p>
    <section class="pjt-slide flex">
        ${templateImages (datasProjet)}
    </section>
    <section class="pjt-description flex">
        <div class="ptj-description__description large-3 medium-12">
            <h5 class="title-h5 description__title-h5">Mon rôle</h5>
            <p class="description_para">${data.role}</p>
        </div>
        <div class="ptj-description__description large-3 medium-12">
            <h5 class="title-h5 description__title-h5">Contexte</h5>
            <p class="description_para">${data.contexte}</p>
        </div>
        <div class="ptj-description__description ptj-description__techno large-3 medium-12 flex">
            <h5 class="title-h5 description__title-h5">Technologies utilisées</h5>
            ${templateTechnos (datasProjet)}
        </div>
        <div class="ptj-description__description large-3 medium-12">
            <h5 class="title-h5 description__title-h5">Commanditaire</h5>
            <p class="description_para">${data.commanditaire}</p>
        </div>
    </section>
    `
    // ciblage et creation dom
    let projet = document.querySelector(".page-projet");
    projet.innerHTML = template;
}

