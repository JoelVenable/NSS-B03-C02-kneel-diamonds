import {
  updatePrice
} from "./updatePrice";
import {
  API
} from "./API";

module.exports.pushPrice = () => {
  let object = updatePrice();

  API.saveLocalData("orders", object)
    .then(output => {
      console.log(output);
    });

};