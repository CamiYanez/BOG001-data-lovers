import functions from "../src/characters/dataCharacters";
import data from "../src/data/rickandmorty/rickandmorty";
// import {
//   removeDuplicates,
//   filterByLetter,
//   countCharactersByLocation,
// } from "../src/data.js";

//test funciones Characters
const { filterData } = functions;
const { results } = data;
const { paginate } = functions;
const { detectCheck } = functions;
// const { sort } = functions;
const nodeList = [
  {
    checked: false,
    value: "Human",
  },
  {
    checked: true,
    value: "Robot",
  },
  {
    checked: true,
    value: "Animal",
  },
];

describe("filterData", () => {
  it("deberia retornar un array de objetos de los personajes que sean de especie Human y Vampire", () => {
    expect(filterData(results, ["Human", "Vampire"])).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          species: "Human",
        }),
        expect.objectContaining({
          species: "Vampire",
        }),
      ])
    );
  });
});

describe("paginate", () => {
  it("deberia retornar un array de 10 objetos", () => {
    expect(paginate(1, results)).toHaveLength(10);
  });
});

describe("detectCheck", () => {
  it("deberia retornar un array con el value de los elementos que tengan la propiedad checked = true", () => {
    expect(detectCheck(nodeList)).toEqual(["Robot", "Animal"]);
  });
});

// const a = 9;
// const b = 3;
// describe("sort", () => {
//   it("deberia retornar 1 para a > b", () => {
//     expect(sort(a, b)).toEqual(1);
//   });
// });
