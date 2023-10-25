const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const news = new Schema({
    newstitle: {
        type: String
    },
   
    newsdescription: {
        type: String
    },

    newstype: {
        type: String
    },
   
    newsCatagory: {
        type: String
    },

    newsimage: {
        type: String
    },
    
 },{
 collection: 'news'
 });

 module.exports = mongoose.model('news', news);