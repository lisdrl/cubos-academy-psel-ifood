const { read } = require('fs');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

const prompt = (message) => {
  return new Promise((resolve, reject) => {
      readline.question(message, data => {
          if (data) {
              return resolve(data)
          }
          return reject("Erro ao capturar dados na tela.")
      })
  })
}

async function solucao(letra, palavras) {
  letra = await prompt("Letra: ");
  palavras = []
  let criancas = parseInt(await prompt("Número de crianças: "));
  let i = 0;
  while (i < criancas){
    let palavra = await prompt("Palavra: ");
    palavras.push(palavra);
    i++;
  }
  let erro = 0;
  for (let i = 0; i < palavras.length; i++){
    if (palavras[i][0] !== letra){
      erro++;
    }
  }
  console.log(erro); 
  readline.close();
}

solucao()