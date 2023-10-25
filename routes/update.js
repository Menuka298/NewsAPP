const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const app = express();
app.use(express.json());
const testroute = express.Router();

//let testmodel = require('../models/testmodel');
var testmodel = mongoose.model('Test', new Schema({ newstitle: String,nic:String }));
const doc = new testmodel();



testroute.route('/update').post(async function (req, res) {
  try {
   // console.log(req.body.newstitle);
   // doc.newstitle = req.body.newstitle;
   const filter = { newstitle: 'Jean-Luc Picard' };
   const update = { newstitle: '59' };
   
   // `doc` is the document _after_ `update` was applied because of
   // `returnOriginal: false`
   const doc = await Character.findOneAndUpdate(filter, update, {
    returnOriginal: false
  });

    res.status(200).json({ 'Patient': 'Added Successfully' });

  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Saving");
  }
});

 


  module.exports = testroute;