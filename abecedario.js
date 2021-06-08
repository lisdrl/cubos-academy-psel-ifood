function solucao(letra, palavras) {
    let erro = 0;
    for (let i = 0; i < palavras.length; i++){
      if (palavras[i][0] !== letra){
        erro++;
      }
    }
    console.log(erro);    
  }