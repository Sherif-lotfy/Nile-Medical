const mongoose = require("mongoose");

const url = process.env.DB_CONNECTION
console.log("url :",url )
  
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected!");
  })
  .catch(() => {
    console.log("Not Connected");
  });
