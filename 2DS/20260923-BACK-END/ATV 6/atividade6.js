// ATIVIDADE 6


// ATIVIDADE 1 - BOAS VINDAS

function atividade1(){

    function boasVindas(){
        alert("Bem-vindo ao sistema!")
    }

    boasVindas()
}



// ATIVIDADE 2 - SAUDACAO

function atividade2(){

    function saudacao(nome){
        alert("Olá, " + nome + "!")
    }

    saudacao("Luan")
}



// ATIVIDADE 3 - MOSTRAR IDADE

function atividade3(){

    function mostrarIdade(idade){
        alert("Idade: " + idade)
    }

    mostrarIdade(25)
}



// ATIVIDADE 4 - SOMA DE DOIS NUMEROS

function atividade4(){

    function somar(a,b){
        alert("Soma: " + (a+b))
    }

    somar(10,5)
}



// ATIVIDADE 5 - DOBRO DE UM NUMERO

function atividade5(){

    function dobro(numero){
        alert("Dobro: " + (numero*2))
    }

    dobro(5)
    dobro(10)
}



// ATIVIDADE 6 - MAIOR OU MENOR DE IDADE

function atividade6(){

    function verificarIdade(idade){

        if(idade >= 18){
            alert("Maior de idade")
        }
        else{
            alert("Menor de idade")
        }

    }

    verificarIdade(25)
}



// ATIVIDADE 7 - CLASSIFICACAO DE NOTA

function atividade7(){

    function verificarNota(nota){

        if(nota >= 7){
            alert("Aprovado")
        }
        else if(nota >= 5){
            alert("Recuperação")
        }
        else{
            alert("Reprovado")
        }

    }

    verificarNota(6)
}



// ATIVIDADE 8 - TABUADA

function atividade8(){

    function tabuada(numero){

        for(let i = 1; i <= 10; i++){

            console.log(numero + " x " + i + " = " + (numero*i))

        }

    }

    tabuada(5)
}



// ATIVIDADE 9 - SOMA COM RETURN

function atividade9(){

    function calcularSoma(a,b){
        return a+b
    }

    let resultado = calcularSoma(10,5)

    alert(resultado)
}



// ATIVIDADE 10 - ENTRADA PELO PROMPT

function atividade10(){

    function verificarNumero(numero){

        if(numero >= 0){
            return "POSITIVO"
        }
        else{
            return "NEGATIVO"
        }

    }

    let resultado = verificarNumero(Number(prompt("Digite um número")))

    alert(resultado)
}



// ATIVAAAAAAAAAAAAAAAAAR A ATIVIDADEEEEEEEEEEEEEEEEE

atividade1()
// atividade2()
// atividade3()
// atividade4()
// atividade5()
// atividade6()
// atividade7()
// atividade8()
// atividade9()
// atividade10()