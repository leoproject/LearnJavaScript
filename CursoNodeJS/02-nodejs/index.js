/*
 Objetivos 
 0 - obter um usuario
 1 - Preciso obter o número de telefone de um usuário a partir de seu ID
 2 - obter o endereço do usuário pelo ID
 */
// importamos um módulo interno do node.js

const util = require('util')

function obterUsuario() {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: "Aladin",
                dataNasicmento: new Date()
            })
        }, 1000)

    })

}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '1199002',
                ddd: 11
            })
        }, 2000)

    })
}

function obterEndereco(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                rua: 'rua dos bobos',
                numero: 0
            })
        }, 2000)

    })
}

const usuarioPromise = obterUsuario();
//para manipular o sucesso usamos a função .then
//para manipular erros, usamos o .cath
usuarioPromise()
    .then(function (usuario) {
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result){
            return{
                usuario:{
                    nome:usuario.nome,
                    id:usuario.id
                },
                telefone:result
            }
        })
    })
    .then(function(resultado){
        return obterEndereco(resultado.usuario.id)
        .then(function resolverEndereco(result){
            return {
                usuario: resultado.usuario,
                telefone:resultado.telefone,
                endereco : result
            }
        })
    })
    .catch(function (error) {
        console.log('Deu ruim', error);
    });



// obterUsuario( function resolverUsuario(error, usuario){
//     if(error){
//         console.log('Deu ruim em Usuarioo', error);
//         return;
//     }

//     obterTelefone(usuario.id,function resolverTelefone(error1,telefone){
//         if(error1){
//             console.log('Deu ruim em telefone', error);
//             return;

//         }

//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//             if(error2){
//                 console.log('Deu ruim enedereço', error2);
//                 return;
//             }

//             console.log(`
//                 Nome:${usuario.nome},
//                 Endereco:${endereco.rua},${endereco.numero},
//                 Telefone:(${telefone.ddd})${telefone.telefone}.

//             `);


//         })

//     })

// })

// const telefone = obterTelefone(usuario.id);
// console.log('usuario', usuario);
// console.log('telefone',telefone);

