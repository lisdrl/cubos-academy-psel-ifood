function solucao(produtos) {
    let lucroTop = 0;
    let lucro = 0;
    for (let i = 0; i < produtos.length; i++){
      if (produtos[i].preco > 10000){
        lucroTop += produtos[i].preco;
      }
    }
    for (let i = 0; i < produtos.length; i++){
      lucro += produtos[i].preco;
    }
    resposta = { 
     totalTop: lucroTop,
     percentual: lucroTop / lucro
    }
    console.log(resposta); 
}