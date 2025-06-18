const nomeUsuario = prompt("Digite seu nome:");
document.getElementById("boasVindas").textContent = `Bem-vindo, ${nomeUsuario}`;

const luzVermelha = document.getElementById("vermelho");
const luzAmarela = document.getElementById("amarelo");
const luzVerde = document.getElementById("verde");
const contador = document.getElementById("contador");
const status = document.getElementById("status");
const botaoPedestre = document.getElementById("botaoPedestre");

let tempo = 9;
let fase = 0;
let pedidoPedestre = false;

botaoPedestre.addEventListener("click", () => {
  pedidoPedestre = true;
  status.textContent = "Pedestre pediu para atravessar!";
});

function atualizarSemaforo() {
  luzVermelha.classList.remove("on");
  luzAmarela.classList.remove("on");
  luzVerde.classList.remove("on");

  if (pedidoPedestre) {
    fase = 0;
    pedidoPedestre = false;
  }

  if (fase === 0) {
    luzVermelha.classList.add("on");
    status.textContent = "Carros Parados - Pedestre pode atravessar";
    tempo = 9;
    fase = 1;
  } else if (fase === 1) {
    luzVerde.classList.add("on");
    status.textContent = "Carros Andando";
    tempo = 9;
    fase = 2;
  } else if (fase === 2) {
    luzAmarela.classList.add("on");
    status.textContent = "Atenção! Vai fechar!";
    tempo = 4;
    fase = 0;
  }

  iniciarContagem();
}

function iniciarContagem() {
  contador.textContent = tempo;
  const intervalo = setInterval(() => {
    tempo--;
    contador.textContent = tempo;
    if (tempo <= 0) {
      clearInterval(intervalo);
      atualizarSemaforo();
    }
  }, 1000);
}

atualizarSemaforo();
