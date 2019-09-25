const ICrud = require('./../interfaces/interfaceCrud');

class ContextStrategy extends ICrud{
    constructor(strategy){
        super()
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

module.exports = ContextStrategy;