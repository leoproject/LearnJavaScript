// npm i hapi

const Hapi = require('hapi');
const Context = require('./db/strategies/mongodb/mongoDbStrategy')
const app = new Hapi.Server({
    port:5000
});

async function main(){
    app.route([
        {
            path:'/herois',
            method: '/GET',
            handler:(request,head) => {

            }

        }
    ])
}