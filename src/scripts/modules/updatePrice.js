//  Called when selectors change


module.exports.updatePrice = () => {
  const priceHeader = document.getElementById("showPrice");

  function getValues(elementId) {
    const element = document.getElementById(elementId);
    return element.querySelector(`[value="${element.value}"]`)
      .getAttribute("data-price");
  }

  const options = [
    getValues("metals-selector"),
    getValues("diamonds-selector"),
    getValues("style-selector")
  ];
  let price = 0;
  options.forEach(option => {
    price += parseFloat(option);
  });
  price = `$${price.toFixed(2)}`;
  priceHeader.innerHTML = `Price: ${price}`;

};