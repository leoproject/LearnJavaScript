const service = require('./service');


async function main(){
    try{
        const result = await service.obterPessoas('a');
        const names = []
        
        // verificando o tempo de execução do forin
        console.time('forin');
        for(let i in result.results){
            const pessoa = result.results[i];
            names.push(pessoa.name);
        }        
        console.timeEnd('forin');
        // Imprimindo o resultado da consulta da API
        console.log('names:', names);
        

    }
    catch(error){
        console.log('Deu ruim , tem um erro interno');
        
    }

}

main();