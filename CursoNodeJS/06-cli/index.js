const Commander = require('commander');
const Database = require('./database');
const Heroi = require('./heroi');

async function main(){
    Commander
    .version('Versão 0.1')
    .option('-n, --nome [value]',"Nome do Heroi")
    .option('-p, --poder [value]', "Poder do Heroi")
    .option('-i, --id [value]', "Id do Heroi")

    .option('-a, --atualizar [value]', "Atualizar um heroi pelo id")
    .option('-c, --cadastrar', "Cadastrar um heroi")
    .option('-l, --listar', "Listar todos herois")
    .option('-r, --remover', "Remover heroi pelo id" )

    .parse(process.argv)
    const heroi = new Heroi(Commander);

    try {
        if (Commander.cadastrar){
            delete heroi.id;
            const resultado = await Database.cadastrar(heroi);
            if(!resultado){
                console.error('Heroi não foi cadastrado');
                return;
            }
            console.log('Heroi cadastrado com êxito!!!');
            
        }

        if(Commander.listar){
            const resultado = await Database.listar();
            console.log(resultado);
            return;
            
        }

        if(Commander.remover){
            const resultado = await Database.remover(heroi.id);
            if (!resultado){
                console.error('Não foi possível deletar o heroi');
                return;
            }
            console.log('Heroi deletado com êxito!!!!');
        }

        if(Commander.atualizar){
            const idParaAtualizar = parseInt(Commander.atualizar);
            const dado = JSON.stringify(heroi);
            const heroiAtualizar = JSON.parse(dado);
            const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizar);
            
            if(!resultado){
                console.error('Não foi possível atualizar!');
                return;
            }
            console.log('Atualizado com sucessso!!!');
            
        }
        
    } catch (error) {
        console.log('Deu ruim', error);
        
    }


}

main();