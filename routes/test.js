const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const app = express();
app.use(express.json());
const testroute = express.Router();

//const Character = mongoose.model('Test', new Schema({ newstitle: String,nic:String }));//update

//let testmodel = require('../models/testmodel');

var testmodel = mongoose.model('Test', new Schema({ newstitle: String,newstype:String }));//insert
const doc = new testmodel();

testroute.route('/update').post(async function (req, res) {
  try {
   // console.log(req.body.newstitle);
   // doc.newstitle = req.body.newstitle;
   const filter = { newstitle: 'ss' };
   const update = { newstitle: '59' };
   
   const doc = await Character.findOneAndUpdate(filter, update, {
    returnOriginal: false
  });
  doc.name; // 'Jean-Luc Picard'
doc.age;

    res.status(200).json({ 'Patient': 'Added Successfully' });

  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Saving");
  }
});

testroute.route('/insert').post(async function (req, res) {
  try {
    
    console.log(req.body);
    doc.newstitle = req.body.newstitle;
   
    var selection="";

    if (req.body.newstype == "MainNews") {
      selection = "Main News";
    } else if (req.body.newstype == "MainArticles") {
      selection = "Main Articles";
    }
    
    console.log("selection:", selection);

    doc.newstype = selection;

    await doc.save();
    
    
    doc.save().then(doc => {
      doc === doc; // true
    });

    res.status(200).json("Insert Success");

  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Saving");
  }
});

testroute.route('/view').get(async function (req, res) {
  try {
    const ress = await testmodel.find({});  
    console.log({ ress }); 

   
    res.status(200).json({ ress });

  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Saving");
  }
});

 


  module.exports = testroute;