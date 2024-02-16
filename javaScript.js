const resultadoGame = document.querySelector('.resultado')
const PontuacaoHum = document.querySelector('#spanHum')
const pontuacaoBot = document.querySelector('#spanBot')

let humanoPontuacao = 0 
let botPontuacao = 0

const playHumano = (escolhaHum) => {

    playGame(escolhaHum, playMaquina())
}

const playMaquina = () => {
    const opcoes = ['pedra', 'papel', 'tesoura']
    const numRandom = Math.floor(Math.random() * 3) /* foi utilizado math.floor e vezez 3 para arrendondar para baixo e pegar um numero aletorio entre 0 e 2 */

    return opcoes[numRandom]

    console.log(numRandom)
}

const playGame = (humano, maquina) => {

    console.log('humano: ' + humano + ' Bot: ' + maquina)


    if (humano === maquina) {
        resultadoGame.innerHTML = "&#x1F634 EMPATOU! &#x1F634;"
    }


    else if (
        (humano === 'papel' && maquina === 'pedra') ||
        (humano === 'tesoura' && maquina === 'papel') ||
        (humano === 'pedra' && maquina === 'tesoura')) {
        humanoPontuacao++   
        PontuacaoHum.innerHTML = humanoPontuacao
        resultadoGame.innerHTML = "	&#x1F389 VOCÊ GANHOU! &#x1F389"
    }

    else {
        botPontuacao++
        pontuacaoBot.innerHTML = botPontuacao
        resultadoGame.innerHTML = "&#x1F625 VOCÊ PERDEU! &#x1F625 "
    }

}

