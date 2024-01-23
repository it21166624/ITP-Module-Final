const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/item-routes");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());
app.use("/items", router); 

mongoose
  .connect(
    "mongodb+srv://randy:folRN8GChEQPpv67@cluster0.qht63am.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
