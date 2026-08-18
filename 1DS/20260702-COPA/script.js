// Array estático com as 20 seleções obrigatórias
const selecoes = [
    "Brasil", "Argentina", "França", "Alemanha", "Espanha", 
    "Inglaterra", "Itália", "Portugal", "Holanda", "Bélgica",
    "Uruguai", "Croácia", "Senegal", "Japão", "Marrocos", 
    "Estados Unidos", "México", "Colômbia", "Suíça", "Dinamarca"
];

// Função principal disparada pelo botão
function simular() {
    
    // 1. Gera a pontuação de força entre 60 e 100 para cada equipe
    let listaEquipes = selecoes.map(selecao => {
        // Fórmula matemática para limitar o random entre 60 e 100
        let forcaAleatoria = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
        return { nome: selecao, forca: forcaAleatoria };
    });

    // 2. Ordena automaticamente o array da maior para a menor pontuação
    listaEquipes.sort((a, b) => b.forca - a.forca);

    // 3. Captura o corpo da tabela no HTML para preencher os dados
    const corpoTabela = document.getElementById("corpo-tabela");
    corpoTabela.innerHTML = ""; // Limpa os resultados da simulação anterior

    // Cria as linhas dinamicamente
    listaEquipes.forEach((equipe, index) => {
        let posicao = index + 1;
        let linha = document.createElement("tr");

        // Condição: Se for o primeiro lugar (posição 1), adiciona a classe azul do CSS
        if (posicao === 1) {
            linha.classList.add("primeiro-lugar");
        }

        // Insere as colunas de Posição, Seleção e Força
        linha.innerHTML = `
            <td>${posicao}º</td>
            <td>${equipe.nome}</td>
            <td>${equipe.forca}</td>
        `;
        
        corpoTabela.appendChild(linha);
    });

    // 4. Exibe a mensagem com a previsão fictícia do campeão (o primeiro da lista)
    const campeao = listaEquipes[0].nome;
    const cardMensagem = document.getElementById("mensagem-campeao");
    cardMensagem.innerHTML = `🏆 Previsão: O grande campeão será o ${campeao}!`;
    cardMensagem.style.display = "block"; // Torna a caixinha visível na tela
}