//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigosArray = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo.length < 0) {
    alert("Por favor, insira um nome.");
  } else {
    listaAmigosArray.push(amigo);
    adicionarAmigosLista(listaAmigosArray);
  }
  console.log(listaAmigosArray);
  limparCampo();
}

function limparCampo() {
  amigo = document.getElementById("amigo");
  amigo.value = "";
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
