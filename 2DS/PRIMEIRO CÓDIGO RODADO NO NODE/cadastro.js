const readline = require("readline/promises");

const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function cadastro() {
  const nome = await entrada.question("Digite seu nome: ");
  const cpf = Number(await entrada.question("Digite seu CPF: "));
  const profissao = await entrada.question("Digite sua profissão: ");
  const telefone = Number(await entrada.question("Digite seu telefone: "));

  console.log(`Olá ${nome}, seja bem-vindo!`);
  entrada.close();
}

cadastro();