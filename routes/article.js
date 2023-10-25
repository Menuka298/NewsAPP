const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
const articleRoutes = express.Router();

let articleModel = require('../model/article');

articleRoutes.route('/getarticle').get(async function (req, res) {
    try {
      const employees = await articleModel.find();
      res.json(employees);
    } catch (err) {
      console.log(err);
    }
  });

  articleRoutes.route('/article').post(async function (req, res) {
    try {
      const articletitle = req.body.articletitle;
      const articledescription = req.body.articledescription;
  
      const newEvent = new articleModel({
        articletitle,
        articledescription,
      });
  
      await newEvent.save();
  
      let transporter = nodemailer.createTransport({
        service: 'Gmail',
  
        auth: {
          user: 'bloodmates.bloodbank@gmail.com', // email address
          pass: 'lqrbgoinvybygjjj' // email password
        }
      });
  
      let mailOptions = {
        from: 'bloodmates.bloodbank@gmail.com',
        to: req.body.email,
        subject: 'Registration Confirmation',
        html: '<h1>Hi Mr/ Mrs : ' + req.body.name + ' Welcome to Bloodmates</h1><p>Thank you for your Money Donations</p>'
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  
      res.status(200).json({ 'Donate': 'Added Successfully' });
  
    } catch (err) {
      console.log(err);
      res.status(400).send("Error in Saving");
    }
  });


  module.exports = articleRoutes;