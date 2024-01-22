const Data = require('../models/data');
const CrudRepository = require('./crud-repository');

class DataRepository extends CrudRepository{
    constructor(){
        super(Data);
    }
}

module.exports = DataRepository;