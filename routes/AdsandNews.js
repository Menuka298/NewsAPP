const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const app = express();
app.use(express.json());
const AdsandNewsroute = express.Router();

var AdsandNewsmodel = mongoose.model(
  "AdsandNews",
  new Schema({ type: String, description: String })
); //insert
const doc = new AdsandNewsmodel();

AdsandNewsroute.route("/insert").post(async function (req, res) {
  try {
    console.log(req.body);
    doc.description = req.body.description;

    var selection = "";

    if (req.body.type == "HotNews") {
      selection = "Hot News";
    } else if (req.body.type == "Ads") {
      selection = "Ads";
    }

    console.log("selection:", selection);

    doc.type = selection;

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

AdsandNewsroute.route('/view').get(async function (req, res) {
  try {
    const employees = await AdsandNewsmodel.find(); //changes
    res.json(employees);
  } catch (err) {
    console.log(err);
  }
});


// AdsandNewsroute.route("/view").get(async function (req, res) {
//   try {
//     const ress = await AdsandNewsmodel.find({});
//     console.log({ ress });

//     res.status(200).json({ ress });
//   } catch (err) {
//     console.log(err);
//     res.status(400).send("Error in Saving");
//   }
// });

module.exports = AdsandNewsroute;
