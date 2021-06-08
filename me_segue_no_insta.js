function solucao(largura, altura) {
    if (largura > 0 && altura > 0){
      if (altura > largura){
        console.log("RETRATO");
      } else if (largura > altura){
        console.log("PAISAGEM");
      } else {
        console.log("QUADRADA");
      }
    }
}