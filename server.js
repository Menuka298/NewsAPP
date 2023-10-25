// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/dbConnection");
// const app = express();
// require('dotenv').config();

// // Mongoose Connection
// connectDB();

// // cors
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   })
// );

// // create port
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log("Connected to port " + port);
// });

// module.exports.app = app;

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

require("dotenv").config();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

const URL = process.env.MONGODB_URL;

const PORT = process.env.PORT || 8070;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connection successful !!!");
}).catch((err) => {
  console.log("MongoDB connection error: ", err);
});

app.listen(PORT, () =>{
  console.log(`Server is up and running on port number: ${PORT}`);
});

app.use("/testroute", require("./routes/test"));
app.use("/newsroute", require("./routes/news"));
app.use("/AdsandNewsroute", require("./routes/AdsandNews"));
app.use("/commentroute", require("./routes/comment"));
app.use("/registerroute", require("./routes/register"));

module.exports.app = app;