const img = document.querySelector("img");
const btn = document.querySelector(".button");

let isOn = false; // Flag

btn.addEventListener("click", function () {
  if (isOn) {
    img.setAttribute("src", "./pics/bulboff.gif");
    btn.innerHTML = "لامپ را روشن کنید";
    isOn = false;
  } else {
    img.setAttribute("src", "./pics/bulbon.gif");
    btn.innerHTML = "لامپ را خاموش کنید";
    isOn = true;
  }
});
