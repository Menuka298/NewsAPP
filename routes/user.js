const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const app = express();
app.use(express.json());
const newsroute = express.Router();

var newsmodel = mongoose.model(
  "News",
  new Schema({ newstitle: String, newsdescription: String, newstype: String, newsCatagory: String, })
); //insert
const doc = new newsmodel();

userRoute.route('/login').post(async function (req, res) {
    try {
      const email = req.body.email;
      const password = req.body.password;
  
      const employee = await userModel.findOne({ email });
  
      if (!employee) {
        res.status(401).json({ error: 'Invalid email or password' });
        return;
      }
  
  
      const isMatch = await bcrypt.compare(password, employee.password);
      if (!isMatch) {
        res.status(401).json({ error: 'Invalid email or password' });
        return;
      }
  
      res.status(200).json({ employee: 'Login successful', role: employee.role });
  
    } catch (err) {
      console.log(err.message);
      res.status(400).send("Error in login");
    }
  });

module.exports = newsroute;
