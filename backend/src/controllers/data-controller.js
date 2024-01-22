const DataService = require("../services/data-service");

const dataService = new DataService();

const getData = async (req, res) => {
    try {
        const response = await dataService.getAll();
        res.status(200).json({
            Message: "Data fetched successfully",
            data: response,
            Error: {},
            Status: "Success"
        });
        
    } catch (error) {
        res.status(500).json({
            Message: "Unable to fetch data",
            data: {},
            Error: error,
            Status: "Failed",
        });
    }
};

const fetchData = async (req, res) => {
    try {
        const response = await dataService.fetchData();
        res.status(200).json({
            Message: "Data fetched successfully",
            data: response,
            Error: {},
            Status: "Success"
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            Message: "Unable to fetch data",
            data: {},
            Error: error,
            Status: "Failed",
        });
    }
};

module.exports = { getData, fetchData };