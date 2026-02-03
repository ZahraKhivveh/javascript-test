//* onScroll

const navbar = document.querySelector(".client-header");

function scrollHandler() {
  if (document.documentElement.scrollTop > 5) {
    navbar.classList.add("sticky-header");
  } else {
    navbar.classList.remove("sticky-header");
  }
}

document.addEventListener("scroll", scrollHandler);
