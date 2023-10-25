const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const comment = new Schema({
    comment: {
        type: String
    },
    
 },{
 collection: 'comment'
 });

 module.exports = mongoose.model('comment', comment);