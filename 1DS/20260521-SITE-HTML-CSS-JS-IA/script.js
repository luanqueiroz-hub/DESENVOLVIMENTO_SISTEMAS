function mostrarConteudo(opcao) {
    let conteudo = document.getElementById("conteudo");

    if (opcao === "quemSomos") {
        conteudo.innerHTML = `
            <h2>Quem Somos</h2>
            <p>
                Somos uma empresa especializada em tecnologia,
                desenvolvimento de sites, sistemas e soluções digitais.
            </p>
            <p>
                Nosso objetivo é oferecer serviços modernos, criativos
                e acessíveis para nossos clientes.
            </p>
        `;
    }

    else if (opcao === "servicos") {
        conteudo.innerHTML = `
            <h2>Serviços</h2>
            <ul>
                <li>🌐 Desenvolvimento de Sites</li>
                <li>📱 Aplicativos Mobile</li>
                <li>💻 Manutenção de Sistemas</li>
                <li>🎨 Criação de Identidade Visual</li>
            </ul>
        `;
    }

    else if (opcao === "produtos") {
        conteudo.innerHTML = `
            <h2>Produtos</h2>
            <p>Conheça alguns dos nossos principais produtos:</p>

            <div class="produtos">

                <div class="produto">
                    <img src="produto1.jpg" alt="Sistema Escolar">
                    <h3>Sistema Escolar</h3>
                    <p>Controle de alunos, notas e frequência.</p>
                </div>

                <div class="produto">
                    <img src="produto2.jpg" alt="Sistema Comercial">
                    <h3>Sistema Comercial</h3>
                    <p>Gerenciamento de vendas e estoque.</p>
                </div>

                <div class="produto">
                    <img src="produto3.jpg" alt="Loja Virtual">
                    <h3>Loja Virtual</h3>
                    <p>Venda seus produtos pela internet.</p>
                </div>

            </div>
        `;
    }

    else if (opcao === "contato") {
        conteudo.innerHTML = `
            <h2>Contato</h2>
            <p>Entre em contato conosco preenchendo o formulário abaixo:</p>

            <form>
                <label>Nome:</label>
                <input type="text" placeholder="Digite seu nome">

                <label>Email:</label>
                <input type="email" placeholder="Digite seu email">

                <label>Mensagem:</label>
                <textarea placeholder="Digite sua mensagem"></textarea>

                <button type="button">Enviar</button>
            </form>
        `;
    }
}