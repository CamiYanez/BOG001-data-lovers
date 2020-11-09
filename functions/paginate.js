/**
 * @typedef {Object} Characters
 * @property {String} species
 * @property {String} name
 */

/**
 * Get page from URL params
 * @param {Location} url
 * @return {String} page
 */
export const getPage = (url) => {
    const objParams = new URLSearchParams(url.search);
    let page = objParams.get("page");
    return page === null ? "0" : page;
};

/**
 * Function to slice data for paginate
 * @param {Number} page Current page
 * @param {Number} pageSize Amount of elements for page
 * @param {Array.<Characters>} dataFiltered Data to be displayed
 */
export const paginate = (page, pageSize, dataFiltered) => {
    const x = page * pageSize;
    const y = x + pageSize;
    const pageData = dataFiltered.slice(x, y);
    return pageData;
};

/**
 * Function to set next page on URL params
 * @param {Number} currentPage
 * @param {Location} url object that contains URL parameters
 */
export const nextPage = (currentPage, url) => {
    const objParams = new URLSearchParams(url.search);
    const nextPage = currentPage + 1;
    objParams.set("page", nextPage.toString());
    url.href = `${url.origin}${url.pathname}?${objParams.toString()}`;
};

/**
 * Function to set previous page on URL params
 * @param {Number} currentPage
 * @param {Location} url Object that contains URL parameters
 */
export const previousPage = (currentPage, url) => {
    // btnPrevius.classList.remove("hide");
    const objParams = new URLSearchParams(url.search);
    const previusPage = currentPage <= 0 ? 0 : currentPage - 1;
    objParams.set("page", previusPage.toString());
    url.href = `${url.origin}?${objParams.toString()}`;
};
