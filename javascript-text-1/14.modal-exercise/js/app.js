const loginButton = document.querySelector(".login-button");
const modalScreen = document.querySelector(".modal-screen");
const closeBtn = document.querySelector("..close");
const closeXBtn = document.querySelector(".close-x-btn");
const continueBtn = document.querySelector(".continue");

function showModal() {
  modalScreen.classList.remove("hidden");
}

function hideModal() {
  modalScreen.classList.add("hidden");
}

loginButton.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);
closeXBtn.addEventListener("click", hideModal);
continueBtn.addEventListener("click", hideModal);
document.body.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    hideModal();
  }
});
