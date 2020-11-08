import { nextPage, previousPage, getPage } from "./paginate.js";
const characters = document.getElementById("characters");
const rick = document.getElementById("containerRick");
const btnShowInfo = characters.querySelectorAll(".cardBtn");
const btnFilter = document.getElementById("btnFilter");
const filtersOptions = document.getElementById("filtersOptions");
const btnMenu = document.getElementById("menu");
const categoriesMenu = document.getElementById("containerCategoriesMenu");
export const btnPrevious = document.getElementById("previus");
export const btnNext = document.getElementById("next");

// ----------------Efecto parallax-------------------
window.addEventListener("scroll", function () {
    let value = window.scrollY;
    rick.style.bottom = value * -0.5 + "px";
});

// ----------------Evento para mostrar información-------------------
characters.addEventListener("click", handleClick);
function handleClick(e) {
    if (e.target.nodeName === "BUTTON") {
        const img = e.target.parentElement;
        const card = e.target.parentElement.parentElement.parentElement;
        card.classList.toggle("rotate");

        console.log(e.target);
        console.log(e.target.parentElement);
        console.log(e.target.parentElement.parentElement.parentElement);

        console.log(`Click on button with id: ${e.target.id}`);
    }
}

//-------------Ocultar o mostrar ventana de filtros al darle click al icono de filtro
btnFilter.addEventListener("click", function () {
    filtersOptions.classList.toggle("hide");
});

//--------------- Ocultar o mostrar ventana de categorias de menu ----------------
btnMenu.addEventListener("click", function () {
    categoriesMenu.classList.toggle("hide");
});

// //Esconder boton de atras
// if (page == 0) {
//   btnPrevius.classList.add("hide");
// }

// //Mostrar la info de personajes cuando se de click en la img
// const imgCharac = document.getElementsByClassName("imgCharacter");
// const char = document.getElementById("characters");
// char.addEventListener("click", function (e) {
//   let characterFocus = e.target;
//   let infoFocus = characterFocus.nextSibling;
//   if (characterFocus.className !== imgCharac[0].className) {
//     infoFocus = characterFocus.parentNode;
//   }
//   infoFocus.classList.toggle("hide");
// });

export default {};
