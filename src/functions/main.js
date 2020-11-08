import dataFile from "../data/rickandmorty/rickandmorty.js";
import { filterData, checkFilters } from "./filters.js";
import { paginate, getPage, nextPage, previousPage } from "./paginate.js";
import { renderData } from "./render.js";
import { btnNext, btnPrevious } from "./DOM.js";
import { } from "./responsive.js";

//Variables
const data = dataFile.results;
const pageSize = 10;
const charactersSection = document.getElementById("characters");
// Almacenar los checkbox
let arrChkbSpecies = document.querySelectorAll(".specie");
let optionsFilter = document.getElementById("specie");

//ESTADO INICIAL DE LA URL
let url = window.location;
const params = new URLSearchParams(url.search);
let filters = params.getAll("filters");

const filter = (url) => {
    const page = parseInt(getPage(url));
    // const filters = detectCheck(arrChkbSpecies);
    const dataFiltered = filterData(data, filters);
    const pagination = paginate(page, pageSize, dataFiltered);
    renderData(pagination, charactersSection);
};

const setFiltersParams = () => {
    const params = new URLSearchParams(url.search);
    params.delete("filters");
    filters.forEach((element) => {
        params.append("filters", element);
    });
    history.pushState(null, "", `?${params.toString()}`);
};

//----------- Evento para detectar cuando se selecciona o se quita un filtro -----------
optionsFilter.addEventListener("change", function (e) {
    if (e.target.checked) {
        filters.push(e.target.id);
    } else {
        filters = filters.filter((element) => element !== e.target.id);
    }
    setFiltersParams();
    filter(url);
});

filter(url);
checkFilters(arrChkbSpecies);

// ------------- Cambio de pagina ---------------

// Evento boton siguiente
btnNext.addEventListener("click", () => {
    const page = parseInt(getPage(url));
    nextPage(page, url);
});

// Evento boton atras
btnPrevious.addEventListener("click", () => {
    const page = parseInt(getPage(url));
    previousPage(page, url);
});
