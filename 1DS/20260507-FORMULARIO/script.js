let clientes = [];

function cadastrar(){

    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;
    let endereco = document.getElementById("endereco").value;
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;

    //Validação de campos vazios
    if(nome == "" || cpf == "" || telefone == "" || email == "" || endereco == "" || login == "" || senha == ""){
        alert("Preencha todos os campos");
        return;
    }

    //Validar login
    if(login.length <5){
        alert("Login precisa ter no mínimo 5 caracteres");
        return;
    }

    //Validar senha
    if(senha.length<8){
        alert("Senha precisa ter no mínimo 8 caracteres");
        return;
    }

    //Confirmar senha
    if(senha !== confirmarSenha){
        alert("As senhas não coincidem");
        return;
    }

    //Validar e-mail
    if(!email.includes("@")){
        alert("E-mail inválido");
        return;
    }

    let cliente = {
        nome,
        cpf,
        telefone,
        email,
        endereco,
        login,
        senha
    };

clientes.push(cliente);
console.log(clientes);
alert("Cliente cadastrado com sucesso!");
}