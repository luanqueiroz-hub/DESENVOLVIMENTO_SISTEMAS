function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa.");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <label class="task-content">
            <input type="checkbox" class="task-checkbox">
            <span>${taskText}</span>
        </label>
        <button class="remove-btn">Remover</button>
    `;

    const checkbox = li.querySelector(".task-checkbox");

    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed");
        updateCounter();
    });

    li.querySelector(".remove-btn").addEventListener("click", () => {
        li.remove();
        updateCounter();
    });

    document.getElementById("taskList").appendChild(li);

    input.value = "";
    updateCounter();
}

function updateCounter() {
    const tasks = document.querySelectorAll("#taskList li");
    const completedTasks = document.querySelectorAll("#taskList li.completed");

    const pendingTasks = tasks.length - completedTasks.length;

    document.getElementById("counter").textContent =
        `Tarefas pendentes: ${pendingTasks}`;
}