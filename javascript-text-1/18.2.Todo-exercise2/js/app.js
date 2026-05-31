const openModalButton = document.querySelector(".open-modal-button");
const addTodoModal = document.querySelector(".modal-screen");
const closeModalX = document.querySelector(".close-modal-x");
const cancel = document.querySelector(".cancel");
const todoInput = document.querySelector(".input");
const todosContainer = document.querySelector(".todos-container");
const createTodoBtn = document.querySelector(".create");

function addTodo(){
  let newTodoTitle = todoInput.value;

  todosContainer.insertAdjacentHTML("beforeend",
  `<article class="todo">
  <div class="todo-buttons"><button class="delete">حذف</button>
  </div>
  <div class="todo-data"><p>${newTodoTitle}</p>
  </div>
  </article>`);

  removeTodoBtn.addEventListener("click" ,function (event){
const mainTodo = event.target.parentElement.parentElement;
mainTodo.remove();
} );

  hideModal();
  todoInput.value = "";
}

function showModal(){
  addTodoModal.classList.remove("hidden");
}
function hideModal(){
  addTodoModal.classList.add("hidden");
}

openModalButton.addEventListener("click" , showModal);
createTodoBtn.addEventListener("click" , addTodo);
cancel.addEventListener("click" , hideModal);
closeModalX.addEventListener("click" , hideModal);
document.body.addEventListener("keydown" , function(event){
  if(event.key ==="Escape"){
    hideModal();
  }
});

