import Coutdown from "./contador.js";

const tempoParaViagemParaEspanha = new Coutdown("30 September 2022 00:00:00 GMT-0300")
const tempos = document.querySelectorAll("[data-time]")

function mostrarTempo(){
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoParaViagemParaEspanha.total[index]
    })
}

//Ativar a função para ficar automático ao começar
mostrarTempo();

//Atualiza o tempo de um em um segundo
setInterval(mostrarTempo, 1000)


