/* CONFIGURAÇÃO GERAL */
body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fff8d6;
}

/* TOPO */
header {
    background-color: #f4c400;
    color: #222;
    padding: 20px;
    text-align: center;
}

/* LOGO */
.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-size: 30px;
    font-weight: bold;
}

.logo img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}

/* ÁREA PRINCIPAL */
main {
    display: flex;
    min-height: 80vh;
}

/* MENU LATERAL */
.menu {
    width: 220px;
    background-color: #ffd633;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

/* BOTÕES */
.menu button {
    padding: 15px;
    border: none;
    background-color: #222;
    color: #ffd633;
    cursor: pointer;
    font-size: 16px;
    border-radius: 8px;
    font-weight: bold;
}

/* EFEITO AO PASSAR O MOUSE */
.menu button:hover {
    background-color: #444;
    color: white;
}

/* CONTEÚDO */
.conteudo {
    flex: 1;
    padding: 30px;
    background-color: #fffbe6;
    color: #222;
}

.conteudo h2 {
    color: #d4a900;
}

/* IMAGENS DOS PRODUTOS */
.produtos {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.produto {
    background-color: white;
    border: 2px solid #f4c400;
    border-radius: 10px;
    padding: 15px;
    width: 180px;
    text-align: center;
}

.produto img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
}

/* FORMULÁRIO DE CONTATO */
form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    gap: 10px;
}

input, textarea {
    padding: 10px;
    border: 2px solid #f4c400;
    border-radius: 5px;
    font-size: 15px;
}

textarea {
    height: 100px;
}

form button {
    background-color: #f4c400;
    color: #222;
    border: none;
    padding: 12px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
}

form button:hover {
    background-color: #d4a900;
}

/* RODAPÉ */
footer {
    background-color: #222;
    color: white;
    text-align: center;
    padding: 15px;
}

/* REDES SOCIAIS */
.redes-sociais a {
    color: #ffd633;
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;
}

.redes-sociais a:hover {
    color: white;
}