const service = require('./service')

async function main(){
    try{
        const results = await service.obterPessoas('a');
        // const names = []
        // // Vendo o tempo do forEach
        // console.time('forEach');
        // results.results.forEach(function(item){
        //     names.push(item.name);

        // })
        // console.timeEnd('forEach');

        // // usando o MAP no modulo function
        // const names = results.results.map(function (pessoa){
        //     return pessoa.name;
        // })

        // outro exemplo de uso de MAP

        const names = results.results.map((pessoa) => pessoa.name);
        console.log('Names:', names);
        

    } catch (error){
        console.log('Deu ruim', error);
    }
}

main()