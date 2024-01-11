var elFormRandomNumber = document.querySelector(".js-random-form");
var elInputRandomNumber = elFormRandomNumber.querySelector(".js-random-input");
var elResultRandomNumber = document.querySelector(".js-random-result");
var randomNumberLimit = 6;
var randomNumber = Math.floor(Math.random() * 10);
elFormRandomNumber.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (randomNumberLimit > 0) {
    randomNumberLimit--;
    if (Number(elInputRandomNumber.value) == randomNumber) {
      elResultRandomNumber.textContent = "chill you found it!";
      elInputRandomNumber.setAttribute("disabled", true);
      elFormRandomNumber.querySelector("button").setAttribute("disabled", true);
    } else {
      elResultRandomNumber.textContent = "not the right random num)";
    }
    console.log(randomNumberLimit, randomNumber);
  }
});
