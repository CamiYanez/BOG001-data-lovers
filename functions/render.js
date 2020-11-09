/**
 *@param {Array} pageData Data to render in the current page
 *@param {HTMLElement} charactersSection Container where going to insert the characters
 *@description Function to render data in page
 */
export const renderData = (pageData, charactersSection) => {
    charactersSection.innerHTML = "";
    let fragment = document.createDocumentFragment();
    pageData.forEach((current, i) => {
        let { id, image, name, gender, species } = current;
        let origin = current.origin.name;

        let cardCharacter = document.createElement("div");
        let containerCharacter = document.createElement("div");
        let containerImage = document.createElement("div");
        let imgCharacter = document.createElement("img");
        let btn = document.createElement("button");
        let containerInfoCharacter = document.createElement("div");
        let textName = document.createElement("h4");
        let textGender = document.createElement("h5");
        let textSpecies = document.createElement("h5");
        let textOrigin = document.createElement("h5");

        cardCharacter.setAttribute("class", "cardCharacter");
        containerCharacter.setAttribute("class", "containerCharacter");
        containerCharacter.setAttribute("id", id);
        containerImage.setAttribute("class", "containerImg"); //------------------
        imgCharacter.setAttribute("src", image);
        btn.setAttribute("class", "cardBtn"); //---------------
        btn.setAttribute("id", id); //--------------
        containerInfoCharacter.setAttribute("id", "infoCharacter");
        containerInfoCharacter.setAttribute("class", "infoCharac");
        imgCharacter.setAttribute("class", "imgCharacter");
        textName.innerHTML = "<span>Name: </span>" + name;
        textGender.innerHTML = "<span>Gender: </span>" + gender;
        textSpecies.innerHTML = "<span>Specie: </span>" + species;
        textOrigin.innerHTML = "<span>Origin: </span>" + origin;
        btn.textContent = name;

        cardCharacter.appendChild(containerCharacter);
        containerCharacter.appendChild(containerImage);
        containerImage.appendChild(imgCharacter);
        containerImage.appendChild(btn);
        containerInfoCharacter.appendChild(textName);
        containerInfoCharacter.appendChild(textGender);
        containerInfoCharacter.appendChild(textSpecies);
        containerInfoCharacter.appendChild(textOrigin);
        containerCharacter.appendChild(containerInfoCharacter);

        fragment.appendChild(cardCharacter);
    });

    charactersSection.appendChild(fragment);
};
