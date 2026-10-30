// =========================================================
// Recôncavo | Cozinha Baiana: carrinho de compras
// =========================================================

// ---------- ETAPA 1: dados do carrinho ----------
// Cada prato vira um objeto: { nome, preco, quantidade }
let carrinho = [];

const textoItens = document.querySelector("#itens");
const textoTotal = document.querySelector("#total");
const selo = document.querySelector("#selo");
const listaCarrinho = document.querySelector("#lista-carrinho");
const totalCarrinho = document.querySelector("#total-carrinho");
const painel = document.querySelector("#carrinho");
const fundo = document.querySelector("#fundo-carrinho");
const botaoFinalizar = document.querySelector("#finalizar");
const botoesPedir = document.querySelectorAll(".btn-pedir");

function dinheiro(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ",");
}

// ---------- ETAPA 2: funções do carrinho ----------
function adicionar(nome, preco) {
    const existente = carrinho.find(function (p) {
        return p.nome === nome;
    });
    if (existente) {
        existente.quantidade++;
    } else {
        carrinho.push({ nome: nome, preco: preco, quantidade: 1 });
    }
    desenhar();
    selo.classList.remove("salta");
    void selo.offsetWidth; // reinicia a animação
    selo.classList.add("salta");
}

function mudarQuantidade(nome, diferenca) {
    const prato = carrinho.find(function (p) {
        return p.nome === nome;
    });
    prato.quantidade += diferenca;
    if (prato.quantidade <= 0) {
        remover(nome);
        return;
    }
    desenhar();
}

function remover(nome) {
    carrinho = carrinho.filter(function (p) {
        return p.nome !== nome;
    });
    desenhar();
}

// ---------- ETAPA 3: desenha tudo na tela ----------
function desenhar() {
    let itens = 0;
    let total = 0;
    listaCarrinho.innerHTML = "";

    carrinho.forEach(function (p) {
        itens += p.quantidade;
        total += p.quantidade * p.preco;

        const li = document.createElement("li");
        li.className = "carrinho-item";
        li.innerHTML =
            "<div>" +
                "<h4>" + p.nome + "</h4>" +
                '<span class="unit">' + dinheiro(p.preco) + " cada</span><br>" +
                '<div class="qtd">' +
                    '<button data-acao="menos" aria-label="Diminuir">−</button>' +
                    "<span>" + p.quantidade + "</span>" +
                    '<button data-acao="mais" aria-label="Aumentar">+</button>' +
                "</div>" +
            "</div>" +
            '<span class="sub">' + dinheiro(p.quantidade * p.preco) + "</span>" +
            '<button class="remover" data-acao="remover">Remover</button>';

        li.querySelector('[data-acao="menos"]').addEventListener("click", function () {
            mudarQuantidade(p.nome, -1);
        });
        li.querySelector('[data-acao="mais"]').addEventListener("click", function () {
            mudarQuantidade(p.nome, 1);
        });
        li.querySelector('[data-acao="remover"]').addEventListener("click", function () {
            remover(p.nome);
        });
        listaCarrinho.appendChild(li);
    });

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = '<li class="carrinho-vazio">Seu carrinho está vazio.<br>Escolha um prato no cardápio.</li>';
    }

    // resumo do topo, selo e total do painel
    textoItens.textContent = itens + (itens === 1 ? " item" : " itens");
    textoTotal.textContent = "Total: " + dinheiro(total);
    selo.textContent = itens;
    totalCarrinho.textContent = dinheiro(total);
    botaoFinalizar.disabled = carrinho.length === 0;

    // atualiza o texto de cada botão "Pedir" do cardápio
    botoesPedir.forEach(function (botao) {
        const nome = botao.closest(".item").querySelector("h3").textContent;
        const prato = carrinho.find(function (p) {
            return p.nome === nome;
        });
        if (prato) {
            botao.classList.add("pedido");
            botao.textContent = "Adicionado ✓ (" + prato.quantidade + "x)";
        } else {
            botao.classList.remove("pedido");
            botao.textContent = "Pedir";
        }
    });
}

// ---------- ETAPA 4: botões "Pedir" ----------
botoesPedir.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const prato = botao.closest(".item");
        const nome = prato.querySelector("h3").textContent;
        const preco = Number(prato.dataset.preco);
        adicionar(nome, preco);
    });
});

// ---------- ETAPA 5: abrir e fechar o painel ----------
function abrirCarrinho() {
    painel.classList.add("aberto");
    fundo.classList.add("aberto");
    painel.setAttribute("aria-hidden", "false");
}

function fecharCarrinho() {
    painel.classList.remove("aberto");
    fundo.classList.remove("aberto");
    painel.setAttribute("aria-hidden", "true");
}

document.querySelector("#abrir-carrinho").addEventListener("click", abrirCarrinho);
document.querySelector("#fechar-carrinho").addEventListener("click", fecharCarrinho);
fundo.addEventListener("click", fecharCarrinho);
document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") fecharCarrinho();
});

// ---------- Limpar e finalizar ----------
document.querySelector("#limpar").addEventListener("click", function () {
    carrinho = [];
    desenhar();
});

botaoFinalizar.addEventListener("click", function () {
    alert("Pedido enviado! Total: " + totalCarrinho.textContent);
    carrinho = [];
    desenhar();
    fecharCarrinho();
});

// ---------- Filtro por categoria ----------
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

// desenha o estado inicial (carrinho vazio)
desenhar();