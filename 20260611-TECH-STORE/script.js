function mostrarConteudo(opcao) {
    let conteudo = document.getElementById("conteudo");

    if (opcao === "quemSomos") {
        conteudo.innerHTML = `
            <h2>🏢 Quem Somos</h2>
            <p>
                Somos uma empresa especializada em tecnologia, desenvolvimento de sites
                e soluções digitais.
            </p>
            <p>
                Nosso objetivo é facilitar o uso da tecnologia no dia a dia das pessoas.
            </p>
        `;
    }

    else if (opcao === "servicos") {
        conteudo.innerHTML = `
            <h2>🛠️ Serviços</h2>
            <ul>
                <li>Criação de sites institucionais</li>
                <li>Desenvolvimento de lojas virtuais</li>
                <li>Manutenção de computadores</li>
                <li>Suporte técnico para empresas</li>
            </ul>
        `;
    }

    else if (opcao === "produtos") {
        conteudo.innerHTML = `
            <h2>🛒 Produtos</h2>
            <p>Conheça alguns produtos oferecidos pela nossa empresa:</p>

            <div class="produtos">

                <div class="card-produto">
                    <img src="img/notebook.png" alt="Notebook">
                    <h3>Notebook</h3>
                    <p>Ideal para estudos, trabalho e programação.</p>
                </div>

                <div class="card-produto">
                    <img src="img/sistema.png" alt="Sistema Comercial">
                    <h3>Sistema Comercial</h3>
                    <p>Solução para controle de vendas e estoque.</p>
                </div>

                <div class="card-produto">
                    <img src="img/loja.png" alt="Loja Virtual">
                    <h3>Loja Virtual</h3>
                    <p>Produto digital para vendas pela internet.</p>
                </div>

            </div>
        `;
    }

    else if (opcao === "contato") {
        conteudo.innerHTML = `
            <h2>✉️ Contato</h2>
            <p>Entre em contato conosco preenchendo o formulário abaixo:</p>

            <form class="form-contato">
                <input type="text" placeholder="Digite seu nome">
                <input type="email" placeholder="Digite seu e-mail">
                <textarea rows="4" placeholder="Digite sua mensagem"></textarea>
                <button type="button" onclick="enviarMensagem()">Enviar</button>
            </form>

            <div class="contato-redes">
                <h3>Nossas redes sociais</h3>

                <div class="links-redes">
                    <a href="#">📷 Instagram</a>
                    <a href="#">📘 Facebook</a>
                    <a href="#">💼 LinkedIn</a>
                    <a href="#">💬 WhatsApp</a>
                </div>
            </div>
        `;
    }
}

function enviarMensagem() {
    alert("Mensagem enviada com sucesso!");
}