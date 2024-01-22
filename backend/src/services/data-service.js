const { WAZIRX_URL } = require('../config/serverConfig');
const {DataRepository} = require('../repositories');
const axios = require("axios");

class DataService{
    constructor(){
        this.dataRepository = new DataRepository();
    }

        async getAll(){
        try{
            // call getAll method of dataRepository and return the result
            const result = await this.dataRepository.getAll();
            return result;
        }catch(error){
            console.log("Error in service layer", error);
        }
    }

    async fetchData(){
        try{
          const data = await axios.get(WAZIRX_URL);
          const response = data.data;

          let arr = [];

          let count = 0;
          for (let p in response) {
            if(count === 10){
              break;
            }
            arr.push({ ...response[p] });
            count++;
          }
          await this.dataRepository.createMany(arr);
          return arr;
        }catch(error){
            console.log("Error in service layer", error);
            return false;
        }
    }
}

module.exports = DataService;