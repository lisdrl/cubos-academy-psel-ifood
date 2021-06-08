function solucao(ano) {
    if (ano > 2021 && ano % 2 === 0){
       for (let i = ano; i >= 2014; i-=4){
        if (i == 2014){
            console.log("COPA");
        } else if (i == 2016) {
            console.log("JOGOS");
        }
        }
    } else {
        console.log("MEH");
    }
}