const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

function solucao(idade) {
  readline.question(`Idade: `, (idade) => {
    if (idade > 0){
      if (idade < 18){
        console.log("ACESSO NEGADO")
      } else {
        console.log("PODE ENTRAR")
      }
    }
    readline.close();
  });
}

solucao()