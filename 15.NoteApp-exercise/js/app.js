const createButton = document.querySelector(".create-button");
const closeModalBtn = document.querySelector(".close");
const closeXBtn = document.querySelector(".close-x-btn");
const modal = document.querySelector(".modal-screen");
const textarea = document.querySelector("textarea");
const createNoteBtn = document.querySelector(".continue");
const colorsBoxes = document.querySelectorAll(".color-box");
const notesContainer = document.querySelector(".notes-container");

let mainColor;

function showModal() {
  modal.classList.remove("hidden");
}

function hideModal() {
  modal.classList.add("hidden");
}

function addNote() {
  const note = textarea.value;

  const parentArticleElem = document.createElement("article");
  parentArticleElem.classList.add("note");

  const noteContentElem = document.createElement("p");
  noteContentElem.classList.add("note-content");
  noteContentElem.innerHTML = note;

  const trashParentDiv = document.createElement("div");
  const noteTrashElem = document.createElement("i");
  noteTrashElem.className = "fa-solid fa-trash delete";

  trashParentDiv.append(noteTrashElem);
  parentArticleElem.append(noteContentElem);
  parentArticleElem.append(trashParentDiv);

  notesContainer.append(parentArticleElem);
  hideModal();
  textarea.value = "";
}

colorsBoxes.forEach(function (colorBox) {
  colorBox.addEventListener("click", function (event) {
    mainColor = event.target.dataset.color;
  });
});

createButton.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", hideModal);
closeXBtn.addEventListener("click", hideModal);
createNoteBtn.addEventListener("click", addNote);
document.body.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    hideModal();
  }
});
