var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elSelect = elForm.querySelector(".js-select");
var elResult = document.querySelector(".js-result");

var USA_VALUE = 12400;
var EURO_VALUE = 20000;
var RUBL_VALUE = 200;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var inputValue = elInput.value;
  var selectValue = elSelect.value;
  var result;
  if (!inputValue) {
    elResult.textContent = "Qiymat kiriting";
  } else if (Number(inputValue) && inputValue.length && selectValue.length) {
    if (selectValue === "USD") {
      result = Number(inputValue) * USA_VALUE;
    } else if (selectValue === "EU") {
      result = Number(inputValue) * EURO_VALUE;
    } else if (selectValue === "RU") {
      result = Number(inputValue) * RUBL_VALUE;
    }
    elResult.textContent = `converted value equal to:  ${result} in ${selectValue}`;
  }
});