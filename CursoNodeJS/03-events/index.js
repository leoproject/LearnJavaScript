const EventEmitter = require('events');


class MeuEmissor extends EventEmitter{

}

const meuEmissor = new MeuEmissor();
const nomeEVento = 'usuario:click';

// meuEmissor.on(nomeEVento, function(click){
//     console.log('um usuario clicou',click);
    
// });

// meuEmissor.emit(nomeEVento, 'na barra de rolagem');
// meuEmissor.emit(nomeEVento, 'no ok');

// let count = 0;
// setInterval(function(){
//     meuEmissor.emit(nomeEVento, 'no Ok'+ (count++))
// }, 1000);

const stdin = process.openStdin();
stdin.addListener('data',function(value){
    console.log(`Você digitou: ${value.toString().trim()}`);

});