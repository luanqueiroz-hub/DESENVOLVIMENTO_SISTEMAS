// ATIVIDADE - APLICAÇÃO DE FUNÇÕES EM JAVASCRIPT


// ATIVIDADE 1 - QUIZ

function atividade1(){

    function pergunta(pergunta,resposta){

        let resp = prompt(pergunta)

        if(resp == resposta){
            return 1
        }
        else{
            return 0
        }
    }

    let pontos = 0

    pontos = pontos + pergunta("Quanto é 2 + 2?","4")
    pontos = pontos + pergunta("Quanto é 5 x 2?","10")
    pontos = pontos + pergunta("Quanto é 10 / 2?","5")

    alert("Você fez " + pontos + " pontos")
}



// ATIVIDADE 2 - CALCULADORA

function atividade2(){

    function soma(a,b){
        return a + b
    }

    function subtracao(a,b){
        return a - b
    }

    function multiplicacao(a,b){
        return a * b
    }

    function divisao(a,b){
        return a / b
    }

    let n1 = Number(prompt("Digite o primeiro número"))
    let n2 = Number(prompt("Digite o segundo número"))

    let opcao = Number(prompt(
        "1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"
    ))

    let resultado

    switch(opcao){

        case 1:
            resultado = soma(n1,n2)
            break

        case 2:
            resultado = subtracao(n1,n2)
            break

        case 3:
            resultado = multiplicacao(n1,n2)
            break

        case 4:
            resultado = divisao(n1,n2)
            break

        default:
            alert("Opção inválida")
    }

    if(opcao >= 1 && opcao <= 4){
        alert("Resultado: " + resultado)
    }
}



// ATIVIDADE 3 - TABUADA

function atividade3(){

    function tabuada(numero){

        for(let i = 1; i <= 10; i++){

            console.log(numero + " x " + i + " = " + numero * i)

        }
    }

    let numero = Number(prompt("Digite um número"))

    tabuada(numero)
}



// ATIVIDADE 4 - CONSUMO DE ENERGIA

function atividade4(){

    function classificar(consumo){

        if(consumo <= 100){
            return "BAIXO"
        }
        else if(consumo <= 200){
            return "MODERADO"
        }
        else if(consumo <= 300){
            return "ALTO"
        }
        else{
            return "MUITO ALTO"
        }
    }

    let residencias = [80,150,250,320,100]

    for(let i = 0; i < residencias.length; i++){

        console.log(
            "Residencia " + (i + 1) +
            ": " + classificar(residencias[i])
        )

    }
}



// ATIVIDADE 5 - MEDIA DO ALUNO

function atividade5(){

    function media(n1,n2,n3){

        return (n1+n2+n3)/3

    }

    function situacao(media){

        if(media >= 7){
            return "APROVADO"
        }
        else if(media >= 5){
            return "RECUPERAÇÃO"
        }
        else{
            return "REPROVADO"
        }
    }

    let nota1 = Number(prompt("Digite a primeira nota"))
    let nota2 = Number(prompt("Digite a segunda nota"))
    let nota3 = Number(prompt("Digite a terceira nota"))

    let mediaAluno = media(nota1,nota2,nota3)

    alert(
        "Média: " + mediaAluno +
        "\nSituação: " + situacao(mediaAluno)
    )
}



// ATIVAAAAAAAAAAAAAAAAAR A ATIVIDADEEEEEEEEEEEEEEEEE

atividade1()
// atividade2()
// atividade3()
// atividade4()
// atividade5()