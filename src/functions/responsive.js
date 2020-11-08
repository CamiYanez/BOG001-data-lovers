let mediaqueryList = window.matchMedia("(min-width: 992px)");

export const manejador = () => {
    if (mediaqueryList.matches) {
        alert("La media query ahora se cumple");
        // filter(50);
    }
};

mediaqueryList.addEventListener("change", manejador);

const dinamicCharacters = document.getElementById("dinamicCharacters");

let character1 = document.createElement("img");
let character2 = document.createElement("img");
let character3 = document.createElement("img");
let character4 = document.createElement("img");
let character5 = document.createElement("img");

character1.setAttribute("class", "charactersHeader");
character2.setAttribute("class", "charactersHeader");
character3.setAttribute("class", "charactersHeader");
character4.setAttribute("class", "charactersHeader");
character5.setAttribute("class", "charactersHeader");

dinamicCharacters.appendChild(character1);
dinamicCharacters.appendChild(character2);
dinamicCharacters.appendChild(character3);
dinamicCharacters.appendChild(character4);
dinamicCharacters.appendChild(character5);
