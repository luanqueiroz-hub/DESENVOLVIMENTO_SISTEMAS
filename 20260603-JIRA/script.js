const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const pendingCounter = document.getElementById("pendingCounter");
const emptyMessage = document.getElementById("emptyMessage");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa.");
        return;
    }

    const li = document.createElement("li");
    li.classList.add("task-item");

    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn");
    removeButton.textContent = "Remover";

    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed", checkbox.checked);
        updatePendingCounter();
    });

    removeButton.addEventListener("click", () => {
        li.remove();
        updatePendingCounter();
        updateEmptyMessage();
    });

    taskContent.appendChild(checkbox);
    taskContent.appendChild(span);

    li.appendChild(taskContent);
    li.appendChild(removeButton);

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();

    updatePendingCounter();
    updateEmptyMessage();
}

function updatePendingCounter() {
    const tasks = document.querySelectorAll(".task-item");
    const completedTasks = document.querySelectorAll(".task-item.completed");

    const pendingTasks = tasks.length - completedTasks.length;

    pendingCounter.textContent = pendingTasks;
}

function updateEmptyMessage() {
    const totalTasks = document.querySelectorAll(".task-item").length;

    if (totalTasks === 0) {
        emptyMessage.classList.remove("hidden");
    } else {
        emptyMessage.classList.add("hidden");
    }
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});