const loadingScreen = document.querySelector(".loading-screen");

function showContent() {
  //* Way 1
  loadingScreen.classList.add("hidden");

  //* Way 2
  // loadingScreen.className += " hidden class-test";
}
