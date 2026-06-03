// ============================================
// EVENTO E VALIDAÇÃO DA LISTA DE TAREFAS
// ============================================
document.getElementById('formTarefa').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o recarregamento automático da página

    const inputTarefa = document.getElementById('taskInput');
    const textoTarefa = inputTarefa.value.trim();
    let valido = true;

    // Validação de campo vazio
    if (textoTarefa === "") {
        mostrarErro('erroTarefa', 'A descrição da tarefa não pode estar vazia.');
        valido = false;
    } else {
        limparErro('erroTarefa');
    }

    // Se a validação passar, insere a tarefa na lista
    if (valido) {
        const listaTarefas = document.getElementById('taskList');

        // Criação do elemento HTML da lista (LI)
        const novaLinha = document.createElement('li');
        novaLinha.style.display = 'flex';
        novaLinha.style.justifyContent = 'space-between'; // Corrigido de 'between' para 'space-between'
        novaLinha.style.alignItems = 'center';
        novaLinha.style.padding = '10px';
        novaLinha.style.borderBottom = '1px solid var(--border)';
        
        // Aqui adicionamos o span com uma classe/ID fácil de achar e os dois botões
        novaLinha.innerHTML = `
            <span class="texto-tarefa" style="flex-grow: 1;">${textoTarefa}</span>
            <div style="display: flex; gap: 8px;">
                <button onclick="concluirTarefa(this)" style="background: var(--success, #28a745); color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer;">Concluir</button>
                <button onclick="this.closest('li').remove()" style="background: var(--danger); color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer;">Excluir</button>
            </div>
        `;

        listaTarefas.appendChild(novaLinha);

        // Feedback visual de sucesso
        const mensagemSucesso = document.getElementById('sucessoTarefa');
        mensagemSucesso.style.display = 'block';

        this.reset(); // Reseta o input do formulário

        // Remove o aviso de sucesso após 2 segundos
        setTimeout(() => {
            mensagemSucesso.style.display = 'none';
        }, 2000);
    }
});

// Nova função auxiliar para alternar o estado de concluído da tarefa
function concluirTarefa(botao) {
    // Encontra o elemento 'li' pai mais próximo e depois o 'span' do texto
    const itemLista = botao.closest('li');
    const texto = itemLista.querySelector('.texto-tarefa');
    
    // Alterna o estilo de risco e opacidade
    if (texto.style.textDecoration === 'line-through') {
        texto.style.textDecoration = 'none';
        texto.style.opacity = '1';
        botao.textContent = 'Concluir';
        botao.style.background = 'var(--success, #28a745)';
    } else {
        texto.style.textDecoration = 'line-through';
        texto.style.opacity = '0.5';
        botao.textContent = 'Desfazer';
        botao.style.background = '#6c757d'; // Cor cinza para o botão "Desfazer"
    }
}