const todoList = [];

function getNewTodoId() {
  if (todoList.length === 0) {
    return 1;
  }

  return todoList.slice(-1)[0]?.id + 1;
}

function createTodoListItem(todo) {
  const listItem = document.createElement("li");
  listItem.id = `todo${todo.id}`;
  listItem.className = "todo";
  const deleteButton = document.createElement("button");
  listItem.textContent = todo.title;
  deleteButton.textContent = "削除";
  function onclick() {
    todoList.splice(
      todoList.findIndex((item) => item.id === todo.id),
      1
    );
    updateTodoDom();
  }
  deleteButton.onclick = onclick;
  listItem.appendChild(deleteButton);
  return listItem;
}

function updateTodoDom() {
  const todoListDom = document.querySelector(".todoList");
  const todoDoms = document.querySelectorAll(".todo");
  // 不要なDOMを削除
  todoDoms.forEach((todoDom) => {
    if (!todoList.find((todo) => todo.id === todoDom.id.slice(4))) {
      todoDom.remove();
    }
  });
  // 足りないDOMを追加
  todoList.forEach((item) => {
    if (!document.querySelector(`#todo${item.id}`)) {
      todoListDom.appendChild(createTodoListItem(item));
    }
  });
  // DOMの状態をlocalStorageに反映
  localStorage.setItem("todos", JSON.stringify(todoList));
}

document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector("#todoAdd");
  const newTodoInput = document.querySelector('input[name="newTodo"]');
  const localData = localStorage.getItem("todos");
  todoList.push(...(localData ? JSON.parse(localData) : []));
  updateTodoDom();

  // todo追加ボタンにロジックを設定
  addButton.addEventListener("click", function (event) {
    event.preventDefault();
    const newTodo = newTodoInput.value.trim();
    if (newTodo) {
      todoList.push({ title: newTodo, id: getNewTodoId() });
      updateTodoDom();
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
