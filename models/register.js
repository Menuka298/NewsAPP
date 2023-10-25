const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const register = new Schema({
    Username: {
        type: String
    },
   
    ID: {
        type: String
    },

    Gmail: {
        type: String
    },
   
    Position: {
        type: String
    },

 },{
 collection: 'register'
 });

 module.exports = mongoose.model('register', register);