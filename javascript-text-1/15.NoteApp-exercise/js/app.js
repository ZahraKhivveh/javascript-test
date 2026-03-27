const createButton = document.querySelector(".create-button");
const closeModalBtn = document.querySelector(".close");
const closeXBtn = document.querySelector(".close-x-btn");
const modal = document.querySelector(".modal-screen");
const createNoteBtn = document.querySelector(".continue");
const textarea = document.querySelector("textarea");
const colorsBoxes = document.querySelectorAll(".color-box");
const notesContainer = document.querySelector(".notes-container");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
let mainColor;

function showModal(){
  modal.classList.remove("hidden");
}
function hideModal(){
  modal.classList.add("hidden");
}

function addNote(){
  const note = textarea.value;

  const parentArticleElem = document.createElement("article");
  parentArticleElem.classList.add("note");
  parentArticleElem.style.backgroundColor = mainColor;

  const noteContentElem =document.createElement("p");
  noteContentElem.classList.add("note-content");
  noteContentElem.innerHTML = note;

  const trashParentDiv =document.createElement("div");
  const noteTrashElem  = document.createElement("i");
  noteTrashElem.className = "fa-solid fa-trash delete";

  noteTrashElem.addEventListener("click" , function(event){
    event.target.parentElement.parentElement.remove();
  });

  trashParentDiv.append(noteTrashElem);
  parentArticleElem.append(noteContentElem);
  parentArticleElem.append(trashParentDiv);
  notesContainer.append(parentArticleElem);
  
  textarea.value = "";
  hideModal();
}

colorsBoxes.forEach(function(colorsBox){
  colorsBox.addEventListener("click" , function(event){
    mainColor = event.target.dataset.color;
    
    let selectColorBox = document.querySelector(".selected");
    selectColorBox.classList.remove("selected");

    event.target.classList.add("selected");
  });
});

function search(){
  let searchValue = searchInput.value;
  let notes = document.querySelectorAll(".note");

  notes.forEach(function(note){
    let noteContentElem = note.querySelector(".note-content");
    if(noteContentElem.innerHTML.includes(searchValue)){
      note.style.display ="flex";
    }else{
      note.style.display= "none";
    }
  });
}

searchBtn.addEventListener("click" , search);
createNoteBtn.addEventListener("click" , addNote);
createButton.addEventListener("click" , showModal);
closeModalBtn.addEventListener("click" , hideModal);
closeXBtn.addEventListener("click" , hideModal);
document.body.addEventListener("keydown" , function(event){
  if(event.key === "Escape"){
    hideModal();
  }
});