const openModalBtn = document.querySelector(".open-modal");
const modal = document.querySelector(".modal-screen");
const x = document.querySelector(".x");
const modalCloseBtn = document.querySelector(".close");
const createTodoBtn = document.querySelector(".continue");
const todoInput = document.querySelector(".todo-input");
const todoSection = document.querySelector(".status-section.default");
const doingSection = document.querySelector(".status-section.in-progress");
const completeSection = document.querySelector(".status-section.complete");
const spanSection = document.querySelector(".status-section.trash");

function showAddTodoModal() {
  modal.classList.remove("hidden");
}

function hideAddTodoModal() {
   modal.classList.add("hidden");
}

function addTodo() {
  let todoNew = todoInput.value;

    todoSection.insertAdjacentHTML("beforeend" , 
  `<article class="todo" id="todo-56287" 
  draggable="true" 
  ondragStart="dragStartHandler(event)">
  <p>${todoNew}</p>
  </article>`
);
modal.classList.add("hidden");
todoInput.value="";
  }

function dragStartHandler(event) {
  event.dataTransfer.setData("elementId" , event.currentTarget.id);
}
function dragOverHandler(event) {
 event.preventDefault();
}

function dropHandler(event) {
  event.preventDefault();

  const elementId = event.dataTransfer.getData("elementId");
  const element = document.getElementById(elementId);

  event.currentTarget.appendChild(element);
}

openModalBtn.addEventListener("click", showAddTodoModal);
modalCloseBtn.addEventListener("click", hideAddTodoModal);
x.addEventListener("click", hideAddTodoModal);
createTodoBtn.addEventListener("click", addTodo);

todoSection.addEventListener("dragover", dragOverHandler);
doingSection.addEventListener("dragover", dragOverHandler);
completeSection.addEventListener("dragover", dragOverHandler);
spanSection.addEventListener("dragover", dragOverHandler);

todoSection.addEventListener("drop", dropHandler);
doingSection.addEventListener("drop", dropHandler);
completeSection.addEventListener("drop", dropHandler);
spanSection.addEventListener("drop", dropHandler);
