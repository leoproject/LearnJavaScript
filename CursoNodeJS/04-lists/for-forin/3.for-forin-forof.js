const service = require('./service');


async function main(){
    try{
        const result = await service.obterPessoas('a');
        const names = []
        
        // verificando o tempo de execução do forof
        console.time('forof');
        for(pessoa of result.results){
            names.push(pessoa.name);
        }
        console.timeEnd('forof');
        
        // Imprimindo o resultado da consulta da API
        console.log('names:', names);
        

    }
    catch(error){
        console.log('Deu ruim , tem um erro interno');
        
    }

}

main();