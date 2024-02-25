document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("input");
  const addButton = document.getElementById("btn");
  const taskList = document.getElementById("todo-item");
  const clearButton = document.getElementById("clearBtn");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function renderTasks() {
    taskList.innerHTML = tasks
      .map(
        (task, index) => `
        <li class="task-list-item">
          <label class="task-list-item-label">
            <input type="checkbox" />
            <span class="task-text" contenteditable="true" data-index="${index}">${task}</span>
          </label>
          <div class="d-flex">
            <span class="btn edit-btn" title="Edit Task"></span>
            <span class="btn delete-btn" title="Delete Task"></span>
          </div>
        </li>
      `
      )
      .join("");
  }

  renderTasks();

  function updateTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  addButton.addEventListener("click", function () {
    const taskValue = taskInput.value.trim();
    if (taskValue === "") {
      alert("Task cannot be blank!");
      return;
    }
    if (tasks.length >= 5) {
      alert("You can only add up to 5 tasks!");
      return;
    }
    tasks.push(taskValue);
    updateTasks();
    renderTasks();
    taskInput.value = "";
    taskInput.focus();
  });

  taskList.addEventListener("input", function (event) {
    const target = event.target;
    if (target.classList.contains("task-text")) {
      const index = target.dataset.index;
      tasks[index] = target.textContent.trim();
      updateTasks();
    }
  });

  taskList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("edit-btn")) {
      const taskText =
        target.parentElement.parentElement.querySelector(".task-text");
      taskText.focus();
    } else if (target.classList.contains("delete-btn")) {
      const index =
        target.parentElement.parentElement.querySelector(".task-text").dataset
          .index;
      tasks.splice(index, 1);
      updateTasks();
      renderTasks();
    }
  });

  clearButton.addEventListener("click", function () {
    localStorage.removeItem("tasks");
    tasks = [];
    renderTasks();
  });

  taskInput.focus();
});
