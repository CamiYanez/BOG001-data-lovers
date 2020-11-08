/**
 * @typedef {Object} Characters
 * @property {String} species
 * @property {String} name
 */

/**
 *
 * @param {Array.<Characters>} data Array of objects with unordered data
 * @param {Boolean} toggle  If it's True, data is ordered from A-Z
 */
export const sort = (data, toggle) => {
    data.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
    if (toggle === true) {
        data = data.reverse();
    }
};
