// ATIVIDADE 5


// EXERCICIO 1 - QUIZ

function atividade1(){

let opcao = Number(prompt("1 - Iniciar Quiz\n2 - Instruções\n3 - Sair"))

switch(opcao){

case 1:

let pontos = 0

let resposta1 = Number(prompt("Quanto é 2 + 2?"))

if(resposta1 == 4){
    pontos = pontos + 1
}
else{
    pontos = pontos - 1
}

let resposta2 = Number(prompt("Quanto é 5 x 2?"))

if(resposta2 == 10){
    pontos = pontos + 1
}
else{
    pontos = pontos - 1
}

let resposta3 = Number(prompt("Quanto é 10 / 2?"))

if(resposta3 == 5){
    pontos = pontos + 1
}
else{
    pontos = pontos - 1
}

let resposta4 = Number(prompt("Quanto é 7 - 3?"))

if(resposta4 == 4){
    pontos = pontos + 1
}
else{
    pontos = pontos - 1
}

let resposta5 = Number(prompt("Quanto é 3 x 3?"))

if(resposta5 == 9){
    pontos = pontos + 1
}
else{
    pontos = pontos - 1
}

alert("Pontos: " + pontos)

break


case 2:

alert("Responda as 5 perguntas do quiz")

break


case 3:

alert("Tchau")

break


default:

alert("Opção inválida")

}

}



// EXERCICIO 2 - CONSUMO DE ENERGIA

function atividade2(){

let opcao = Number(prompt("1 - Informar consumo\n2 - Classificar consumo\n3 - Orientação\n4 - Sair"))

switch(opcao){

case 1:

for(let i = 1; i <= 5; i++){

    let consumo = Number(prompt("Digite o consumo da residencia " + i))

    console.log("Residencia " + i + ": " + consumo + " kWh")

}

break


case 2:

for(let i = 1; i <= 5; i++){

    let consumo = Number(prompt("Digite o consumo da residencia " + i))

    if(consumo <= 100){
        console.log("Residencia " + i + ": consumo baixo")
    }
    else if(consumo <= 200){
        console.log("Residencia " + i + ": consumo moderado")
    }
    else if(consumo <= 300){
        console.log("Residencia " + i + ": consumo alto")
    }
    else{
        console.log("Residencia " + i + ": consumo muito alto")
    }

}

break


case 3:

alert("Até 100 kWh: baixo\nAté 200 kWh: moderado\nAté 300 kWh: alto\nAcima de 300 kWh: muito alto")

break


case 4:

alert("Tchau")

break


default:

alert("Opção inválida")

}

}



// EXERCICIO 3 - LISTA DE COMPRAS

function atividade3(){

let produto = ["ovo", "uva", "bife", "frango", "coca", "cigarro"]

let preco = [12, 10, 35, 18, 6, 20]

let opcao = Number(prompt("1 - Listar produtos\n2 - Consultar produto\n3 - Ver preços\n4 - Sair"))

switch(opcao){

case 1:

alert("1 - Ovo\n2 - Uva\n3 - Bife\n4 - Frango\n5 - Coca\n6 - Cigarro")

break


case 2:

let escolha = Number(prompt("Escolha um produto de 1 até 6"))

if(escolha >= 1 && escolha <= 6){

    let posicao = escolha - 1

    alert("Produto: " + produto[posicao] + "\nPreço: R$ " + preco[posicao])

    let quantidade = Number(prompt("Quantas unidades?"))

    let subtotal = preco[posicao] * quantidade

    alert("Subtotal: R$ " + subtotal)

}
else{
    alert("Produto inválido")
}

break


case 3:

alert("Ovo: R$ 12\nUva: R$ 10\nBife: R$ 35\nFrango: R$ 18\nCoca: R$ 6\nCigarro: R$ 20")

break


case 4:

alert("Tchau")

break


default:

alert("Opção inválida")

}

}



// ATIVAAAAAAAAAAAAAAAAAR A ATIVIDADEEEEEEEEEEEEEEEEE

//atividade1()
//atividade2()
atividade3()