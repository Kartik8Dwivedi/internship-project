const {DataRepository} = require('../repositories/data-repository');

class DataService{
    constructor(){
        this.dataRepository = new DataRepository();
    }

    async create(data){
        try{
            const result = await this.dataRepository.create(data);
            return result;
        }catch(error){
            console.log("Error in service layer", error);
            throw error;
        }
    }

    async destroy(id){
        try{
            const result = await this.dataRepository.destroy(id);
            return result;
        }catch(error){
            console.log("Error in service layer", error);
        }
    }

    async get(id){
        try{
            const result = await this.dataRepository.get(id);
            return result;
        }catch(error){
            console.log("Error in service layer", error);
        }
    }

    async getAll(){
        try{
            const result = await this.dataRepository.getAll();
            return result;
        }catch(error){
            console.log("Error in service layer", error);
        }
    }

    async update(id, data){
        try{
            const result = await this.dataRepository.update(id, data);
            return result;
        }catch(error){
            console.log("Error in service layer", error);
        }
    }
}

module.exports = DataService;