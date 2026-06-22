let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let soma = 0;
let divMatriz = document.getElementById("matriz");

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
    let valor = matriz[linha][coluna];

    soma += valor;

    let celula = document.createElement("div");
    celula.className = "celula";
    celula.textContent = valor;

    divMatriz.appendChild(celula);
  }
}

document.getElementById("resultado").textContent =
  "A soma de todos os valores é: " + soma;