const mongoose = require("mongoose");
var mangourl =
  "mongodb+srv://hameed381:Y16cs943@cluster0.l6plzgu.mongodb.net/marleysjoint";

mongoose.connect(mangourl, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("mongo Db connection succesfull");
});
db.on("error", () => {
  console.log("mongo Db connection Failed");
});
module.exports = mongoose;