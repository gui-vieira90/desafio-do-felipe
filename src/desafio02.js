function calcularNivel (vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    let nivelHeroi
    
    
    if(vitorias <= 10){
        nivelHeroi = "Ferro"
    }else if(vitorias >= 10 && vitorias <=20){
        nivelHeroi = "Bronze"
    }else if(vitorias >= 21 && vitorias <=50){
        nivelHeroi = "Prata"
    }else if(vitorias >= 50 && vitorias <=80){
        nivelHeroi = "Ouro"
    }else if(vitorias >= 80 && vitorias <=90){
        nivelHeroi = "Diamante"
    }else if(vitorias >= 90 && vitorias <=100){
        nivelHeroi = "Lendário"
    }else if(vitorias >= 101){
        nivelHeroi = "Imortal"
    }

    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivelHeroi}`

}

let calcularResultado = calcularNivel(110,5)
console.log(calcularResultado)



