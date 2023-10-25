const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const app = express();
app.use(express.json());
const registerroute = express.Router();

var registermodel = mongoose.model(
  "Register",
  new Schema({ Username: String, ID: String , Gmail: String , Position: String })
); //insert
const doc = new registermodel();

registerroute.route("/insert").post(async function (req, res) {
  try {
    console.log(req.body);
    doc.Username = req.body.Username;
    doc.ID = req.body.ID;
    doc.Gmail = req.body.Gmail;

    var selection = "";

    if (req.body.Position == "SuperAdmin") {
      selection = "Super Admin";
    } else if (req.body.Position == "Admin") {
      selection = "Admin";
    } else if (req.body.Position == "Writer") {
        selection = "Writer";
      }

    console.log("selection:", selection);

    doc.Position = selection;

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

registerroute.route("/view").get(async function (req, res) {
  try {
    const ress = await registermodel.find({});
    console.log({ ress });

    res.status(200).json({ ress });
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Saving");
  }
});

module.exports = registerroute;
