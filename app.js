//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo.trim().length === 0) {
    alert("Por favor, insira um nome.");
  } else {
    amigos.push(amigo);

    adicionarAmigosLista(amigos);
  }

  limparCampo();
}

function limparCampo() {
  let amigoInput = document.getElementById("amigo");
  amigoInput.value = "";
}

function adicionarAmigosLista(amigos) {
  let lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === "") {
    alert("Não há amigos para sortear!");
    return;
  }

  const amigoAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[amigoAleatorio];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `Amigo Sorteado: ${amigoSorteado}`;
  // let lista = document.getElementById("listaAmigos");
  // lista.innerHTML = "";
}
