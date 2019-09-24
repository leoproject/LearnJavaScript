const Commander = require('commander');
const Database = require('./database');
const Heroi = require('./heroi');

async function main(){
    Commander
    .version('Versão 0.1')
    .option('-n, --nome [value]',"Nome do Heroi")
    .option('-p, --poder [value]', "Poder do Heroi")
    .option('-i, --indice [value]', "Indice do Heroi")

    .option('-c, --cadastrar', "Cadastrar um heroi")

    .parse(process.argv)
    const heroi = new Heroi(Commander);

    try {
        if (Commander.cadastrar){
            const resultado = await Database.cadastrar(heroi);
            if(!resultado){
                console.error('Heroi não foi cadastrado');
                return;
            }
            console.log('Heroi cadastrado com êxito!!!');
            
        }
        
    } catch (error) {
        console.log('Deu ruim', error);
        
    }


}

main();