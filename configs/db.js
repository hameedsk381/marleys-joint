const mongoose = require("mongoose");
require("dotenv").config()
var mangourl =
  process.env.MONGO_DB;

mongoose.connect(mangourl, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("mongo Db connection succesfull");
});
db.on("error", () => {
  console.log("mongo Db connection Failed");
});
module.exports = mongoose;