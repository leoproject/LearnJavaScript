const arr = [1,3,4,5,8,10];

// Map percorre cada item do veto e executa a função
const newArr = arr.map(function(item, index){
    return item+index;
})

console.log(newArr);

// pega o vetor e reduz para um valor natural
const sum = arr.reduce(function(total,next){
    return total+next;

});

console.log(sum);

// ele filtra de acordo com a função
const filter = arr.filter(function(item){
    return item % 2 === 0;

});

console.log(filter);

// find para encontrar dentro do array

const find = arr.find(function(item){
    return item === 2;

});