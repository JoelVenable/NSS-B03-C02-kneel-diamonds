import {
  API
} from "./modules/API.js";

module.exports.poulateSelectors = () => {
  //  HTML ids: metals-selector, diamonds-selector, style-selector
  function buildOption(name, id) {
    return `<option value="${id}">${name}</option>`
  }

  const selectMetal = document.getElementById("metals-selector");
  const selectDiamonds = document.getElementById("diamonds-selector");
  const selectStyle = document.getElementById("style-selector");

  console.log(selectMetal.innerHTML);

}