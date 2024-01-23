const mongoose = require('mongoose');
const { stringify } = require('querystring');

const offerSchema = new mongoose.Schema({
    packagename:{
        type:String,
        require:true
    },
    packagdiscount:{
        type:String,
        require:true
    },
    packagitem:{
        type:String,
        require:true
    },
    packagnumber:{
        type:String,
        require:true
    },
});

module.exports = mongoose.model("Offers",offerSchema);