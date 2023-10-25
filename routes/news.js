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

newsroute.route("/insert").post(async function (req, res) {
  try {
    console.log(req.body);
    doc.newstitle = req.body.newstitle;
    doc.newsdescription = req.body.newsdescription;
    doc.newstype = req.body.newstype;

    var selection = "";

    if (req.body.newsCatagory == "MainNews") {
      selection = "Main News";
    } else if (req.body.newsCatagory == "MainArticles") {
      selection = "Main Articles";
    } else if (req.body.newsCatagory == "Articles") {
      selection = "Articles";
    }

    console.log("selection:", selection);

    doc.newsCatagory = selection;

    await doc.save();

    doc.save().then((doc) => {
      doc === doc; // true
    });

    res.status(200).json("Insert Success");
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Saving");
  }
});

newsroute.route('/view').get(async function (req, res) {
  try {
    const employees = await newsmodel.find();
    res.json(employees);
  } catch (err) {
    console.log(err);
  }
});

// newsroute.route("/view").get(async function (req, res) {
//   try {
//     const ress = await newsmodel.find({});
//     console.log({ ress });

//     res.status(200).json({ ress });
//   } catch (err) {
//     console.log(err);
//     res.status(400).send("Error in Saving");
//   }
// });

module.exports = newsroute;
