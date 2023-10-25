const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const testmodel = new Schema({
    testvar: {
        type: String
    },
   
    test1var: {
        type: String
    },

    
 },{
 collection: 'testmodel'
 });

 module.exports = mongoose.model('testmodel', testmodel);