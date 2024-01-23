const mongoose = require('mongoose');
const { stringify } = require('querystring');

const projectSchema = new mongoose.Schema({
    customername:{
        type:String,
        require:true
    },
    worktype:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    employeename:{
        type:String,
        require:true
    },
    emdate:{
        type:String,
        require:true
    },
    emtime:{
        type:String,
        require:true
    },
    contactnumber:{
        type:String,
        require:true
    },
    summarychart:{
        type:String,
        require:true
    },
});

module.exports = mongoose.model("Projects",projectSchema);