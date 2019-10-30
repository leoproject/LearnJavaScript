//REST 

const usuario ={
    nome:'Leonardo',
    idade:27,
    contato:2344455
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

const arr = [1,2,3,4];
const [a,b, ...c] =arr;

console.log(a);
console.log(b);
console.log(c);


function soma(...params){
    return params.reduce((total,next)=> total+next);
}

console.log(soma(2,4,8));

//spread 

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1,...arr2];
console.log(arr3);

const usuario1={
    nome:'leonardo',
    idade:27,
    empresa:'UMINHO'
};

const usuario2= {...usuario1, nome:'Tico'};
console.log(usuario2);





