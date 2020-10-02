
// This function gets the todos from local storage and returns an array
function getTodos() { 
  var todos = new Array;
  var todosString = localStorage.getItem("todoList");
  if (todosString !== null) {
    todos = JSON.parse(todosString);
  }
  return todos
}

function add() { // this adds the task to the todos array and stores it in localStorage
  var task = document.getElementById("task").value;
  var todos = getTodos();
  todos.push(task);
  localStorage.setItem("todoList", JSON.stringify(todos));
  document.getElementById("task").value = "";
  show();
  console.log(todos);
  return false;
}

function remove() { //this removes from the array and stores the edited array in localStorage
  var id = this.getAttribute("id");
  var todos = getTodos();
  todos.splice(id,1);
  localStorage.setItem("todoList", JSON.stringify(todos));
  show();
  
  return false;
}

function show() { // this displays the todo list on the screen and sets up the event listeners for removal.
  var todos = getTodos();
  var html = "<ul>";
  for (let i = 0; i < todos.length; i++) {
    html += "<li>" + todos[i] + "<button class='remove' id='" + i + "'>x</button></li>";
  }
  document.getElementById("todos").innerHTML = html
  
  var remove_buttons = document.getElementsByClassName("remove");
  for (let j = 0; j < remove_buttons.length; j ++) {
    remove_buttons[j].addEventListener("click", remove);
  }

}

document.getElementById("add").addEventListener("click", add);

show();

