let alunos = [];

function calcularmedia(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;
    return media;
}

function verificarsituacao(media) {
    if (media >= 7) {
        return "APROVADO";
    } else if (media >= 5) {
        return "RECUPERAÇÃO";
    } else {
        return "REPROVADO";
    }
}

function cadastraralunos() {
    let nome = prompt("Digite o nome do aluno:");
    let nota1 = Number(prompt("Digite a primeira nota:"));
    let nota2 = Number(prompt("Digite a segunda nota:"));
    let nota3 = Number(prompt("Digite a terceira nota:"));

    if (
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
    ) {
        alert("Erro: as notas devem estar entre 0 e 10.");
        return;
    }

    let media = calcularmedia(nota1, nota2, nota3);
    let situacao = verificarsituacao(media);

    let aluno = {
        nome: nome,
        notas: [nota1, nota2, nota3],
        media: media.toFixed(2),
        situacao: situacao
    };

    disabled_array = alunos.push(aluno);
    alert("Aluno cadastrado com sucesso!");
}

function listaralunos() {
    if (alunos.length == 0) {
        alert("Nenhum aluno cadastrado.");
        return;
    }

    let mensagem = "===== LISTA DE ALUNOS =====\n";

    for (let i = 0; i < alunos.length; i++) {
        mensagem += `-----------------------------\n`;
        mensagem += `Nome: ${alunos[i].nome}\n`;
        mensagem += `Notas: ${alunos[i].notas.join(" | ")}\n`;
        mensagem += `Média: ${alunos[i].media}\n`;
        mensagem += `Situação: ${alunos[i].situacao}\n`;
    }

    alert(mensagem);
}

function consultaraluno() {
    if (alunos.length == 0) {
        alert("Nenhum aluno cadastrado.");
        return;
    }

    let nomeBusca = prompt("Digite o nome do aluno que deseja procurar:");
    let encontrado = false;

    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nome.toLowerCase() === nomeBusca.toLowerCase()) {
            let mensagem = `===== ALUNO ENCONTRADO =====\n`;
            mensagem += `Nome: ${alunos[i].nome}\n`;
            mensagem += `Notas: ${alunos[i].notas.join(" | ")}\n`;
            mensagem += `Média: ${alunos[i].media}\n`;
            mensagem += `Situação: ${alunos[i].situacao}\n`;
            
            alert(mensagem);
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        alert("Aluno não encontrado no sistema.");
    }
}

function exibirestatisticas() {
    if (alunos.length == 0) {
        alert("Nenhum aluno cadastrado para gerar estatísticas.");
        return;
    }

    let totalAlunos = alunos.length;
    let aprovados = 0;
    let recuperacao = 0;
    let reprovados = 0;
    let somaMedias = 0;

    let alunoMaiorMedia = alunos[0];
    let alunoMenorMedia = alunos[0];

    for (let i = 0; i < alunos.length; i++) {
        let alunoAtual = alunos[i];
        
        somaMedias += Number(alunoAtual.media);

        if (alunoAtual.situacao === "APROVADO") aprovados++;
        if (alunoAtual.situacao === "RECUPERAÇÃO") recuperacao++;
        if (alunoAtual.situacao === "REPROVADO") reprovados++;

        if (Number(alunoAtual.media) > Number(alunoMaiorMedia.media)) {
            alunoMaiorMedia = alunoAtual;
        }

        if (Number(alunoAtual.media) < Number(alunoMenorMedia.media)) {
            alunoMenorMedia = alunoAtual;
        }
    }

    let mediaGeralTurma = somaMedias / totalAlunos;

    let mensagem = "===== ESTATÍSTICAS DA TURMA =====\n";
    mensagem += `Total de alunos: ${totalAlunos}\n`;
    mensagem += `Quantidade de aprovados: ${aprovados}\n`;
    mensagem += `Quantidade em recuperação: ${recuperacao}\n`;
    mensagem += `Quantidade de reprovados: ${reprovados}\n`;
    mensagem += `Média geral da turma: ${mediaGeralTurma.toFixed(2)}\n`;
    mensagem += `Aluno com maior média: ${alunoMaiorMedia.nome} (${alunoMaiorMedia.media})\n`;
    mensagem += `Aluno com menor média: ${alunoMenorMedia.nome} (${alunoMenorMedia.media})\n`;

    alert(mensagem);
}

let opcao;

do {
    opcao = prompt(
        "===== MENU GERENCIAMENTO DE NOTAS =====\n" +
        "1 - Cadastrar aluno\n" +
        "2 - Listar alunos\n" +
        "3 - Consultar aluno\n" +
        "4 - Exibir estatísticas\n" +
        "5 - Sair\n\n" +
        "Escolha uma opção:"
    );

    switch (opcao) {
        case "1":
            cadastraralunos();
            break;
        case "2":
            listaralunos();
            break;
        case "3":
            consultaraluno();
            break;
        case "4":
            exibirestatisticas();
            break;
        case "5":
            alert("Saindo do sistema. Até logo!");
            break;
        default:
            alert("Opção inválida! Escolha um número de 1 a 5.");
    }

} while (opcao !== "5");
