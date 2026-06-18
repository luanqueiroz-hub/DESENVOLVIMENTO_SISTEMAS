function mostrarConteudo(opcao){
let conteudo = document.getElementById("conteudo");
if(opcao === "quemSomos"){
conteudo.innerHTML = `
<h2>Quem Somos</h2>
<p>
Somos uma empresa especializada em tecnologia
e desenvolvimento de sistemas.
</p>
`;

}
else if(opcao === "servicos"){
conteudo.innerHTML = `
<h2>Serviços</h2>
<ul>
<li>Desenvolvimento Web</li>
<li>Aplicativos Mobile</li>
<li>Manutenção de Sistemas</li>
</ul>
`;
}
else if(opcao === "produtos"){
conteudo.innerHTML = `
<h2>Produtos</h2>
<ul>
<li>Sistema Escolar</li>
<li>Sistema Comercial</li>
<li>Loja Virtual</li>
</ul>
`;
}
}