import {
  populateSelectors
} from "./modules/populateSelectors";
import {
  pushPrice
} from "./modules/pushPrice";

populateSelectors();

document.getElementById("addToCart")
  .addEventListener("click", pushPrice);