const usuario ={
    nome:'Diego',
    idade: 30,
    endereco:{
        estado:'Ri do sul',
        cidade:'SC',
    },
};

const {nome, idade,endereco:{cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);


