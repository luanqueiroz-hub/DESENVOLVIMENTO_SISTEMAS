// =========================================================
// Recôncavo | Cozinha Baiana: interatividade com JavaScript
// =========================================================

// ---------- ETAPA 1: variáveis e elementos da página ----------
let itens = 0;
let total = 0;

const textoItens = document.querySelector("#itens");
const textoTotal = document.querySelector("#total");

// ---------- ETAPA 2: função que atualiza o resumo do pedido ----------
function atualizarResumo() {
    textoItens.textContent = itens + (itens === 1 ? " item" : " itens");
    textoTotal.textContent = "Total: R$ " + total.toFixed(2).replace(".", ",");
}

// ---------- ETAPA 3: botão "Pedir" de cada prato ----------
const botoes = document.querySelectorAll(".btn-pedir");

botoes.forEach(function (botao) {
    let quantidade = 0; // cada botão guarda a sua própria contagem

    botao.addEventListener("click", function () {
        const prato = botao.closest(".item"); // sobe até o prato inteiro
        quantidade = quantidade + 1;
        itens = itens + 1;
        total = total + Number(prato.dataset.preco);

        botao.classList.add("pedido");
        botao.textContent = "Adicionado ✓ (" + quantidade + "x)";
        atualizarResumo();
    });
});

// ---------- Limpar pedido ----------
document.querySelector("#limpar").addEventListener("click", function () {
    itens = 0;
    total = 0;
    botoes.forEach(function (botao) {
        botao.classList.remove("pedido");
        botao.textContent = "Pedir";
    });
    // zera também a contagem de cada botão recarregando a página
    location.reload();
});

// ---------- DESAFIO: filtro por categoria ----------
const filtros = document.querySelectorAll(".filtro");
const pratos = document.querySelectorAll(".item");

filtros.forEach(function (filtro) {
    filtro.addEventListener("click", function () {
        const escolhida = filtro.dataset.categoria;

        filtros.forEach(function (outro) {
            outro.classList.remove("ativo");
        });
        filtro.classList.add("ativo");

        pratos.forEach(function (prato) {
            const categoria = prato.querySelector(".categoria").textContent;
            const esconder = escolhida !== "Todos" && categoria !== escolhida;
            prato.classList.toggle("oculto", esconder);
        });
    });
});

// ---------- Ação do botão Ver Carrinho ---------- 
document.querySelector("#ver-carrinho").addEventListener("click", function () {
    if (itens === 0) {
        alert("Seu carrinho está vazio! Adicione algum prato do cardápio.");
    } else {
        alert("Avançando para o carrinho com " + itens + " itens. " + textoTotal.textContent);
        // Aqui você pode redirecionar para outra página ou abrir um modal/janela flutuante
    }
});
