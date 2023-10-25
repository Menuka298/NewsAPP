const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const AdsandNews = new Schema({
    Username: {
        type: String
    },
   
    ID: {
        description: String
    },

 },{
 collection: 'AdsandNews'
 });

 module.exports = mongoose.model('AdsandNews', AdsandNews);