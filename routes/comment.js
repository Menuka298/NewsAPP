const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const app = express();
app.use(express.json());
const commentroute = express.Router();

var commentmodel = mongoose.model(
  "Comment",
  new Schema({ Comment: String })
); //insert
const doc = new commentmodel();

commentroute.route("/insert").post(async function (req, res) {
  try {
    console.log(req.body);
    doc.Comment = req.body.Comment;

    // var selection = "";

    // if (req.body.newstype == "MainNews") {
    //   selection = "Main News";
    // } else if (req.body.newstype == "MainArticles") {
    //   selection = "Main Articles";
    // }

    // console.log("selection:", selection);

    // doc.newstype = selection;

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

commentroute.route('/view').get(async function (req, res) {
  try {
    const employees = await commentmodel.find();
    res.json(employees);
  } catch (err) {
    console.log(err);
  }
});

module.exports = commentroute;
