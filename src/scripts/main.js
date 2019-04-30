import {
  populateSelectors
} from "./modules/populateSelectors";
import {
  updatePrice
} from "./modules/updatePrice";

populateSelectors();

setTimeout(updatePrice, 600);