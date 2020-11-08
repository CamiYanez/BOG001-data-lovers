/**
 * @typedef {Object} Characters
 * @property {String} species
 * @property {String} name
 */

/**
 *Function to search all characters with checked filters in the data
 *@param {Array.<Characters>} data Data to filter
 *@param {Array} filters Active filters
 *@return {Array} Filtered Data
 */
export const filterData = (data, filters) => {
    if (filters.length == 0) {
        return data;
    }
    let dataFiltered = data.filter((character) => {
        return filters.includes(character.species);
    });
    return dataFiltered;
};

//Función para leer parametros de filtros en URL y los en pagina actual
export const checkFilters = (checkbox) => {
    const objParams = new URLSearchParams(window.location.search);
    const filtersUrl = objParams.getAll("filters");

    checkbox.forEach((chb) => {
        filtersUrl.forEach((filterParameter) => {
            if (chb.value == filterParameter) {
                chb.checked = true;
            }
        });
    });
};
