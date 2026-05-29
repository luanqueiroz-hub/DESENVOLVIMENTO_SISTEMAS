//JAVASCRIPT
<script>

function adicionarAluno(){

// PEGAR OS DADOS DOS INPUTS
let nome = document.getElementById("nome").value;
let idade = document.getElementById("idade").value;
let curso = document.getElementById("curso").value;

// VALIDAR CAMPOS
if(nome == "" || idade == "" || curso == ""){
alert("Preencha todos os campos!");
return;
}

// PEGAR A TABELA
let tabela = document.getElementById("tabelaAlunos");

// CRIAR UMA NOVA LINHA
let novaLinha = tabela.insertRow();

// CRIAR AS CÉLULAS
let celulaNome = novaLinha.insertCell(0);
let celulaIdade = novaLinha.insertCell(1);
let celulaCurso = novaLinha.insertCell(2);

// INSERIR OS DADOS
celulaNome.innerHTML = nome;
celulaIdade.innerHTML = idade;
celulaCurso.innerHTML = curso;

// LIMPAR OS CAMPOS
document.getElementById("nome").value = "";
document.getElementById("idade").value = "";
document.getElementById("curso").value = "";
}

</script>

</body>
</html>
