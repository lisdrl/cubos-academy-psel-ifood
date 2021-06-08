function solucao(tempo, distancia) {
    let precoFinal = 0;
    if (tempo < 5){
        console.log(600);
    } else if (tempo >= 5 && tempo < 60){
        precoFinal = (tempo + (distancia * 0.5)) * 100;
        console.log(precoFinal);
    } else if ( tempo >= 60){
        if (distancia < 100){
            precoFinal = 2 * distancia * 100;
            console.log(precoFinal);
        } else {
            precoFinal = 1.5 * distancia * 100;
            console.log(precoFinal)
      }
    }
}
  