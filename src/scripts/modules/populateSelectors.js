import {
  API
} from "./API.js";
import {
  updatePrice
} from "./updatePrice.js";


module.exports.populateSelectors = () => {
  //  HTML ids: metals-selector, diamonds-selector, style-selector
  function buildOption(name, id, price) {
    return `<option value="${id}" data-price="${price}">${name}</option>`;
  }

  function getOptions(selectorElementId, endpoint, objectNameKey) {
    const selectorElement = document.getElementById(selectorElementId);
    return API.getLocalData(endpoint)
      .then(items => {
        items.forEach(item => {
          selectorElement.innerHTML += buildOption(item[objectNameKey], item.id, item.price);
        });
      })
      .then(selectorElement.addEventListener("change", updatePrice));
  }

  Promise.all([
    getOptions("metals-selector", "metals", "metal"),
    getOptions("diamonds-selector", "diamonds", "carets"),
    getOptions("style-selector", "ringStyles", "style")
  ]).then(updatePrice);
};