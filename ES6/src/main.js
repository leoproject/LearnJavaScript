

const minhaPromise =()=> new Promise((resolve,reject)=>{
 setTimeout(()=> {resolve('ok')},2000);
});

async function executaPromise(){
    console.log(await minhaPromise());
}

executaPromise();

