function formatCurrencyInput(input) {
  let value = input;

  if (value.indexOf(".") === 0) {
    // adds 0. when only dot is pressed
    value = `0${value}`;
  }

  value = value.replace(/\.{2,}/g, "."); // only keep the first dot

  value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3"); // only allow 2 digits after the dot

  if (value.indexOf(".") < 0 && value !== "") {
    // transform value to float
    value = parseFloat(value).toString();
  }

  return value;
}

module.exports = formatCurrencyInput;
