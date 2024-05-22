function createTodoListItem(todo, onclick) {
  const listItem = document.createElement("li");
  const deleteButton = document.createElement("button");
  listItem.textContent = todo;
  deleteButton.textContent = "削除";
  deleteButton.onclick = onclick;
  listItem.appendChild(deleteButton);
  return listItem;
}

document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector("#todoAdd");
  const todoList = document.querySelector(".todoList");
  const newTodoInput = document.querySelector('input[name="newTodo"]');
  const localData = localStorage.getItem("todos");
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

const classlessCss = {
  newcss: "https://cdn.jsdelivr.net/npm/@exampledev/new.css@1/new.min.css",
  mvpcss: "https://unpkg.com/mvp.css",
  picocss: "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css",
  holidayCss: "https://cdn.jsdelivr.net/npm/holiday.css@0.11.2",
};

const addStyleHead = (href) => {
  document.querySelector("#cssHead")?.remove();
  const link = document.createElement("link");
  link.id = "cssHead";
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
};

document.addEventListener("DOMContentLoaded", function () {
  const cssButton = document.querySelector("#cssApply");
  const cssSelector = document.querySelector("#css");
  cssButton.addEventListener("click", function (event) {
    event.preventDefault();
    const option = cssSelector.options[cssSelector.selectedIndex]?.value;
    addStyleHead(classlessCss[option]);
    localStorage.setItem("css", option);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const css = localStorage.getItem("css");
  const cssSelector = document.querySelector("#css");
  if (css) {
    const csss = Object.keys(classlessCss);
    cssSelector.selectedIndex = csss.findIndex((v) => v === css);
  }
  addStyleHead(classlessCss?.[css]);
});

document.addEventListener("DOMContentLoaded", function () {});
