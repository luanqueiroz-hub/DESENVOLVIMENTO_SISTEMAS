// ESTUDO DE CASO — EQUIPE DE MANUTENÇÃO


// ATIVIDADE 1 - CONTROLE DE ESTACIONAMENTO

function atividade1(){

    // DIAGNOSTICO:
    // horas acima de 6 estavam entrando na condição errada
    // o total estava sendo substituido e não somado
    // por isso o valor final e a contagem estavam errados

    let total = 0
    let acima6 = 0

    for(let i = 1; i <= 6; i++){

        let horas = Number(prompt(`Quantas horas ficou o veículo ${i}?`))
        let valor = 0

        if(horas <= 1){
            valor = 8
        }
        else if(horas <= 3){
            valor = 15
        }
        else if(horas <= 6){
            valor = 25
        }
        else{
            valor = 40
            acima6++
        }

        total = total + valor

        alert(`Veículo ${i}: R$ ${valor}`)
    }

    alert(`Total arrecadado: R$ ${total}`)
    alert(`Veículos acima de 6 horas: ${acima6}`)

    // TESTE: 1, 2, 4, 7, 8 e 3 horas
    // RESULTADO: total R$ 143 e 2 veículos acima de 6 horas
}



// ATIVIDADE 2 - CONTROLE DE LOTACAO

function atividade2(){

    // DIAGNOSTICO:
    // o grupo estava sendo somado antes de verificar se cabia
    // isso fazia a lotação passar de 30 pessoas
    // faltava também mostrar as vagas restantes

    let capacidade = 30
    let pessoas = 0
    let grupo

    do{

        grupo = Number(prompt("Quantas pessoas existem no grupo?"))

        if(pessoas + grupo <= capacidade){

            pessoas = pessoas + grupo

            alert(
                `Entrada permitida!
Lotação: ${pessoas}/${capacidade}
Vagas restantes: ${capacidade - pessoas}`
            )

        }
        else{

            alert(
                `Entrada não permitida!
Vagas restantes: ${capacidade - pessoas}`
            )

        }

    }while(pessoas < capacidade)

    alert("Evento lotado!")

    // TESTE: 10, 12, 9 e 8 pessoas
    // RESULTADO: o grupo de 9 não entra e a lotação termina em 30
}



// ATIVIDADE 3 - RADAR DE VELOCIDADE

function atividade3(){

    // DIAGNOSTICO:
    // o array começava no indice 1 em vez de 0
    // o for repetia uma vez a mais
    // 80 km/h precisava ficar dentro do limite
    // acima de 100 precisava ser testado antes de acima de 80
    // infracoes estava contando todos os veículos

    let velocidades = [
        62,81,95,73,110,
        88,54,102,76,91
    ]

    let limite = 80
    let infracoes = 0

    for(let i = 0; i < velocidades.length; i++){

        if(velocidades[i] <= limite){

            console.log(
                `${velocidades[i]} km/h - DENTRO DO LIMITE`
            )

        }
        else if(velocidades[i] > 100){

            console.log(
                `${velocidades[i]} km/h - EXCESSO GRAVE`
            )

            infracoes++

        }
        else if(velocidades[i] > 80){

            console.log(
                `${velocidades[i]} km/h - EXCESSO DE VELOCIDADE`
            )

            infracoes++

        }

    }

    console.log(`Total de infrações: ${infracoes}`)

    // TESTE: valores do array fornecido
    // RESULTADO: 6 infrações
}



// ATIVAAAAAAAAAAAAAAAAAR A ATIVIDADEEEEEEEEEEEEEEEEE

atividade1()
// atividade2()
// atividade3()