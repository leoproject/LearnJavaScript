// exemplo para visualizar 
class NotImplementedException extends Error{
    constructor(){
        super("Not implemented Exception");
    }
}

class ICrud{
    create(item){
        throw new NotImplementedException();
    }

    read(query){
        throw new NotImplementedException();
    }

    update(id, item){
        throw new NotImplementedException(); 
    }

    delete(id){
        throw new NotImplementedException();
    }
    
}

class MongoDB extends ICrud{
    constructor(){
        super();
    }

    create(item){
        console.log('o item foi salvo em MongoDB');
        
    }
}

class Postgres extends ICrud{
    constructor(){
        super();
    }

    create(item){
        console.log('o item foi salvo em postgres');
        
    }
}
class ContextStrategy{
    constructor(strategy){
        this._database = strategy;
    }

    create(item){
        return this._database.create(item);
    }

    read(item){
        return this._database.create(item);
    }

    update(id, item){
        return this._database.create(id,item);
    }

    update(id){
        return this._database.create(id);
    }
}

const contextMongo = new ContextStrategy(new MongoDB());
contextMongo.create();

const contextPostgres = new ContextStrategy(new Postgres());
contextPostgres.create();