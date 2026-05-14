function emailValido(email) {
    return email.includes("@") && email.includes(".");
}

function senhaValida(senha) {
    return senha.length >= 8;
}

function mostrarMensagem(id, texto, tipo) {
    const mensagem = document.getElementById(id);
    mensagem.textContent = texto;
    mensagem.className = tipo;
}

document.getElementById("formCurso").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nomeCurso").value;
    const carga = document.getElementById("cargaCurso").value;
    const turno = document.getElementById("turnoCurso").value;
    const descricao = document.getElementById("descricaoCurso").value;

    if (nome === "" || carga === "" || turno === "" || descricao === "") {
        mostrarMensagem("msgCurso", "Preencha todos os campos.", "erro");
    } else {
        mostrarMensagem("msgCurso", "Curso cadastrado com sucesso!", "sucesso");
        this.reset();
    }
});

document.getElementById("formProfessor").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nomeProfessor").value;
    const cpf = document.getElementById("cpfProfessor").value;
    const email = document.getElementById("emailProfessor").value;
    const telefone = document.getElementById("telefoneProfessor").value;
    const disciplina = document.getElementById("disciplinaProfessor").value;
    const senha = document.getElementById("senhaProfessor").value;

    if (nome === "" || cpf === "" || email === "" || telefone === "" || disciplina === "" || senha === "") {
        mostrarMensagem("msgProfessor", "Preencha todos os campos.", "erro");
    } else if (!emailValido(email)) {
        mostrarMensagem("msgProfessor", "Digite um e-mail válido.", "erro");
    } else if (!senhaValida(senha)) {
        mostrarMensagem("msgProfessor", "A senha precisa ter pelo menos 8 caracteres.", "erro");
    } else {
        mostrarMensagem("msgProfessor", "Professor cadastrado com sucesso!", "sucesso");
        this.reset();
    }
});

document.getElementById("formAluno").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nomeAluno").value;
    const cpf = document.getElementById("cpfAluno").value;
    const data = document.getElementById("dataAluno").value;
    const email = document.getElementById("emailAluno").value;
    const telefone = document.getElementById("telefoneAluno").value;
    const curso = document.getElementById("cursoAluno").value;
    const senha = document.getElementById("senhaAluno").value;

    if (nome === "" || cpf === "" || data === "" || email === "" || telefone === "" || curso === "" || senha === "") {
        mostrarMensagem("msgAluno", "Preencha todos os campos.", "erro");
    } else if (!emailValido(email)) {
        mostrarMensagem("msgAluno", "Digite um e-mail válido.", "erro");
    } else if (!senhaValida(senha)) {
        mostrarMensagem("msgAluno", "A senha precisa ter pelo menos 8 caracteres.", "erro");
    } else {
        mostrarMensagem("msgAluno", "Aluno cadastrado com sucesso!", "sucesso");
        this.reset();
    }
});