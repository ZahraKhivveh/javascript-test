const keyElem = document.querySelector(".key");
const locationElem = document.querySelector(".location");
const codeElem = document.querySelector(".code");
const whichElem = document.querySelector(".which");
const keycodeTitle = document.querySelector(".keycode-title");
const keycodeElem = document.querySelector(".keycode");

document.body.addEventListener("keydown", function (event) {
  event.preventDefault();

  // document.body.className = "key-pressed";
  document.body.classList.add("key-pressed");

  keyElem.innerHTML = event.key;
  locationElem.innerHTML = event.location;
  codeElem.innerHTML = event.code;
  whichElem.innerHTML = event.which;
  keycodeTitle.innerHTML = event.which;
  keycodeElem.innerHTML = event.key;
});
