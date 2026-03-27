const openModalButton = document.querySelector(".open-modal-button");
const addTodoModal = document.querySelector(".modal-screen");
const closeModalX = document.querySelector(".close-modal-x");
const cancel = document.querySelector(".cancel");
const todoInput = document.querySelector(".input");
const todosContainer = document.querySelector(".todos-container");
const createTodoBtn = document.querySelector(".create");

function addTodo(){
  let newTodoTitle = todoInput.value;

  let articleElem = document.createElement("article");
  articleElem.className = "todo";

  let todoDataDiv = document.createElement("div");
  todoDataDiv.className = "todo-data";

  let todoTitleElem = document.createElement("p");
  todoTitleElem.innerHTML = newTodoTitle;

  let todoButtonsDiv = document.createElement("div");
  todoButtonsDiv.className = "todo-buttons";

  let removeTodoBtn = document.createElement("button");
  removeTodoBtn.innerHTML = "حذف";
  removeTodoBtn.className = "delete";

  removeTodoBtn.addEventListener("click" ,function (event){
const mainTodo = event.target.parentElement.parentElement;
mainTodo.remove();
} );
  todoButtonsDiv.append(removeTodoBtn);
  todoDataDiv.append(todoTitleElem);
  articleElem.append(todoButtonsDiv);
  articleElem.append(todoDataDiv);
  todosContainer.append(articleElem);

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

