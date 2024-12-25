const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("connection DB successful"))
    .catch((error) => {
      console.log("error in DB");
      console.log(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
