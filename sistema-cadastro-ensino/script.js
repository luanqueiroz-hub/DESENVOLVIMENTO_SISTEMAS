let cursos = [];
let professores = [];
let alunos = [];

function emailValido(email) {
    return email.includes("@") && email.includes(".");
}

function senhaForte(senha) {
    const temTamanho = senha.length >= 8;
    const temLetra = /[A-Za-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);

    return temTamanho && temLetra && temNumero;
}

function mostrarMensagem(idMensagem, texto, tipo) {
    const mensagem = document.getElementById(idMensagem);
    mensagem.textContent = texto;
    mensagem.className = "mensagem " + tipo;
}

function limparFormulario(idFormulario) {
    document.getElementById(idFormulario).reset();
}

// Cadastro de Cursos
const formCurso = document.getElementById("formCurso");

formCurso.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeCurso = document.getElementById("nomeCurso").value.trim();
    const codigoCurso = document.getElementById("codigoCurso").value.trim();
    const periodoCurso = document.getElementById("periodoCurso").value;
    const descricaoCurso = document.getElementById("descricaoCurso").value.trim();

    if (nomeCurso === "" || codigoCurso === "" || periodoCurso === "" || descricaoCurso === "") {
        mostrarMensagem("mensagemCurso", "Preencha todos os campos do curso.", "erro");
        return;
    }

    const curso = {
        nomeCurso,
        codigoCurso,
        periodoCurso,
        descricaoCurso
    };

    cursos.push(curso);
    console.log("Cursos cadastrados:", cursos);
    mostrarMensagem("mensagemCurso", "Curso cadastrado com sucesso!", "sucesso");
    limparFormulario("formCurso");
});

// Cadastro de Professores
const formProfessor = document.getElementById("formProfessor");

formProfessor.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeProfessor = document.getElementById("nomeProfessor").value.trim();
    const emailProfessor = document.getElementById("emailProfessor").value.trim();
    const disciplinaProfessor = document.getElementById("disciplinaProfessor").value.trim();
    const senhaProfessor = document.getElementById("senhaProfessor").value;
    const confirmarSenhaProfessor = document.getElementById("confirmarSenhaProfessor").value;

    if (nomeProfessor === "" || emailProfessor === "" || disciplinaProfessor === "" || senhaProfessor === "" || confirmarSenhaProfessor === "") {
        mostrarMensagem("mensagemProfessor", "Preencha todos os campos do professor.", "erro");
        return;
    }

    if (!emailValido(emailProfessor)) {
        mostrarMensagem("mensagemProfessor", "Digite um e-mail válido.", "erro");
        return;
    }

    if (!senhaForte(senhaProfessor)) {
        mostrarMensagem("mensagemProfessor", "A senha deve ter no mínimo 8 caracteres, uma letra e um número.", "erro");
        return;
    }

    if (senhaProfessor !== confirmarSenhaProfessor) {
        mostrarMensagem("mensagemProfessor", "As senhas não coincidem.", "erro");
        return;
    }

    const professor = {
        nomeProfessor,
        emailProfessor,
        disciplinaProfessor,
        senhaProfessor
    };

    professores.push(professor);
    console.log("Professores cadastrados:", professores);
    mostrarMensagem("mensagemProfessor", "Professor cadastrado com sucesso!", "sucesso");
    limparFormulario("formProfessor");
});

// Cadastro de Alunos
const formAluno = document.getElementById("formAluno");

formAluno.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeAluno = document.getElementById("nomeAluno").value.trim();
    const emailAluno = document.getElementById("emailAluno").value.trim();
    const cursoAluno = document.getElementById("cursoAluno").value;
    const observacaoAluno = document.getElementById("observacaoAluno").value.trim();
    const senhaAluno = document.getElementById("senhaAluno").value;
    const confirmarSenhaAluno = document.getElementById("confirmarSenhaAluno").value;

    if (nomeAluno === "" || emailAluno === "" || cursoAluno === "" || senhaAluno === "" || confirmarSenhaAluno === "") {
        mostrarMensagem("mensagemAluno", "Preencha todos os campos obrigatórios do aluno.", "erro");
        return;
    }

    if (!emailValido(emailAluno)) {
        mostrarMensagem("mensagemAluno", "Digite um e-mail válido.", "erro");
        return;
    }

    if (!senhaForte(senhaAluno)) {
        mostrarMensagem("mensagemAluno", "A senha deve ter no mínimo 8 caracteres, uma letra e um número.", "erro");
        return;
    }

    if (senhaAluno !== confirmarSenhaAluno) {
        mostrarMensagem("mensagemAluno", "As senhas não coincidem.", "erro");
        return;
    }

    const aluno = {
        nomeAluno,
        emailAluno,
        cursoAluno,
        observacaoAluno,
        senhaAluno
    };

    alunos.push(aluno);
    console.log("Alunos cadastrados:", alunos);
    mostrarMensagem("mensagemAluno", "Aluno cadastrado com sucesso!", "sucesso");
    limparFormulario("formAluno");
});