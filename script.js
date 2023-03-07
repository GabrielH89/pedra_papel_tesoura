/*let nome = window.prompt("Digite seu nome")

let valor = document.getElementById("botao");

valor.addEventListener("click", addValor)

let incremento = 0;
function addValor(){
    incremento ++;
    document.getElementById("score_jogador").textContent = incremento;
}*/

let score_jogador = 0;
let score_computador = 0;


const jogadasDisponiveis = ["pedra", "papel", "tesoura"]

function jogar(jogadaUsuario){
    const jogadaAleatoria = Math.floor(Math.random() * 3)
    const jogadaComputador = jogadasDisponiveis[jogadaAleatoria];

    if(jogadaComputador === jogadaUsuario){
        alert("Empate")
    }else if(jogadaComputador === "pedra"){
        if(jogadaUsuario === "papel"){
            score_jogador++;
            document.getElementById("score_jogador").textContent = score_jogador;
        }else{
            score_computador++;
            document.getElementById("score_computador").textContent = score_computador;
        }
    }else if(jogadaComputador === "papel"){
        if(jogadaUsuario === "pedra"){
            score_computador++;
            document.getElementById("score_computador").textContent = score_computador;
        }else{
            score_jogador++;
            document.getElementById("score_jogador").textContent = score_jogador;
        }
    }else{
        if(jogadaUsuario == "pedra"){
            score_jogador++;
            document.getElementById("score_jogador").textContent = score_jogador;
        }else{
            score_computador++;
            document.getElementById("score_computador").textContent = score_computador;
        }
    }
}






