function solucao(precos) {
    precoFinal = 0;
  
    function minimo(precos){
      return Math.min.apply(Math, precos);
    }
  
    if (precos.length >= 5){
      for (let i = 0; i < precos.length; i++){
        precoFinal += precos[i];
      }
      precoFinal = precoFinal - minimo(precos);
    } else {
        for (let i = 0; i < precos.length; i++){
            precoFinal += precos[i];
        }
    }
    console.log(precoFinal);   
  }