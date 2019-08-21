
function imc (peso,altura){
    return peso / (altura*altura);

}

var pessoas = [
    {
        nome:'pedro',
        altura: 1.83,
        peso:80
    },

    {
        nome:'maria',
        altura:1.90,
        peso:90
    },
    {
        nome: 'joão',
        altura:2.00,
        peso:100
    }
]

for (var i=0; i<pessoas.length;i++){
    console.log(imc(pessoas[i].peso,pessoas[i].altura));
    
}