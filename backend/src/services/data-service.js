const { WAZIRX_URL } = require('../config/serverConfig');
const {DataRepository} = require('../repositories');
const axios = require("axios");

class DataService {
  constructor() {
    this.dataRepository = new DataRepository();
  }

  async getAll() {
    try {
      // call getAll method of dataRepository and return the result
      const result = await this.dataRepository.getAll();
      return result;
    } catch (error) {
      console.log("Error in service layer", error);
    }
  }

  async fetchData() {
    try {
      const apiResponse = await axios.get(WAZIRX_URL);
      const apiData = Array.isArray(apiResponse.data)
        ? apiResponse.data
        : Object.values(apiResponse.data);

      const storedDataNames = new Set(
        (await this.dataRepository.getAll()).map((item) => item.name)
      );
      const newData = [];

      for (const responseItem of apiData) {
        if (newData.length === 10) {
          break;
        }

        if (!storedDataNames.has(responseItem.name)) {
          newData.push({ ...responseItem });
        }
      }

      await this.dataRepository.createMany(newData);
      return newData;
    } catch (error) {
      console.log("Error in service layer", error);
      return false;
    }
  }
}

module.exports = DataService;