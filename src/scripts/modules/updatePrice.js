//  Called when selectors change


module.exports.updatePrice = () => {
  const priceHeader = document.getElementById("showPrice");

  function getSelectedOption(elementId) {
    const element = document.getElementById(elementId);
    return element.querySelector(`[value="${element.value}"]`);
  }
  const optionPicks = {
    style: getSelectedOption("style-selector"),
    carets: getSelectedOption("diamonds-selector"),
    metal: getSelectedOption("metals-selector")
  };
  let output = {
    price: 0
  };
  for (const key in optionPicks) {
    if (optionPicks.hasOwnProperty(key)) {
      const element = optionPicks[key];
      output[key] = element.textContent;
      output.price += parseFloat(element.getAttribute("data-price"));
    }
  }
  let formattedPrice = `$${output.price.toFixed(2)}`;
  priceHeader.innerHTML = `Price: ${formattedPrice}`;
  return output;
};