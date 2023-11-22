function calcularXP (nivelMonstro, dificuldadeBatalha){
    const ganharPontos = nivelMonstro * dificuldadeBatalha * 100


    console.log(`Você ganhou ${ganharPontos} XP`)
}

const nivelMonstro = parseInt(prompt("Digite o nível do Monstro: "))

const dificuldadeBatalha = parseInt(prompt("Digite a dificuldade de Batalha (de 1 a 100): "))


calcularXP(nivelMonstro, dificuldadeBatalha)