/**
 * @param params
 * @return {string}
 */
function queryParams(params) {
  return Object.keys(params)
    .map(key => key + "=" + params[key])
    .join("&");
}