"use strict";

var usuario = {
  nome: 'Diego',
  idade: 30,
  endereco: {
    estado: 'Ri do sul',
    cidade: 'SC'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);
