//* onContextMenu
const contextMenu = document.querySelector(".contextmenu");

function showContextMenu(event) {
  event.preventDefault();

  if (contextMenu.style.display === "none") {
    contextMenu.style.display = "block";
    contextMenu.style.left = `${event.pageX}px`;
    contextMenu.style.top = `${event.pageY}px`;
  } else {
    contextMenu.style.left = `${event.pageX}px`;
    contextMenu.style.top = `${event.pageY}px`;
  }
}

function hideContextMenu() {
  contextMenu.style.display = "none";
}

function hideContextMenuWithEscape(event) {
  if (event.key === "Escape") {
    contextMenu.style.display = "none";
  }
}

document.addEventListener("contextmenu", showContextMenu);
document.body.addEventListener("click", hideContextMenu);
document.body.addEventListener("keydown", hideContextMenuWithEscape);
