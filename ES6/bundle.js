"use strict";

// na const não pode mudar variavel tornando a linguagem fortemente tipada
// const a = 1;
// a = 3;
//mutação é possível dentro de uma variavel de escopo
var usuario = {
  nome: 'Diego'
};
usuario.nome = 'Cleiton';

function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10);

document.getElementById("action").onclick = function () {
  console.log(usuario);
};
