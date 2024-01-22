const mongoose = require('mongoose');


const dataSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    last:{
        type: Number,
        required: true,
    },
    buy:{
        type: Number,
        required: true,
    },
    sell:{
        type: Number,
        required: true,
    },
    base_unit:{
        type: String,
        required: true,
    },
    volume:{
        type: Number,
        required: true,
    }
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;