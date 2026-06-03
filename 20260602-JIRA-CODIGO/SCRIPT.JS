
function addTask() {

    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa.");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="remove-btn">Remover</button>
    `;

    li.querySelector(".remove-btn")
        .addEventListener("click", () => {
            li.remove();
        });

    document
        .getElementById("taskList")
        .appendChild(li);

    input.value = "";
}