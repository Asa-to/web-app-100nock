function createTodoListItem(todo, onclick) {
  const listItem = document.createElement("li");
  const deleteButton = document.createElement("button");
  listItem.textContent = todo;
  deleteButton.textContent = "削除";
  deleteButton.onclick = onclick;
  listItem.appendChild(deleteButton);
  return listItem;
}

function getLocalData(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector('button[type="submit"]');
  const todoList = document.querySelector(".todoList");
  const newTodoInput = document.querySelector('input[name="newTodo"]');
  const localData = getLocalData("todos");
  const todos = localData ? JSON.parse(localData) : [];
  todos.forEach(function (todo) {
    todoList.appendChild(createTodoListItem(todo));
  });

  addButton.addEventListener("click", function (event) {
    event.preventDefault();
    const newTodo = newTodoInput.value.trim();
    if (newTodo) {
      const todoListItem = createTodoListItem(newTodo, function (item) {
        todoList.removeChild(item);
        localStorage.setItem(
          "todos",
          JSON.stringify(todos.filter((item) => item !== newTodo))
        );
      });
      todoList.appendChild(todoListItem);
      todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(todos));
      newTodoInput.value = "";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.jsdelivr.net/npm/@exampledev/new.css@1/new.min.css";
  document.head.appendChild(link);
});
