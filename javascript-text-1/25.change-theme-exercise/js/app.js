const colorBtns = document.querySelectorAll(".theme-button");

colorBtns.forEach(function (colorBtn) {
  colorBtn.addEventListener("click", setTheme);
});

function setTheme(event) {
  const mainTheme = event.target.dataset.color;

  document.documentElement.style.setProperty("--dynamic-color", mainTheme);
}
 