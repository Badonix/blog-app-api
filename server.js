const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
dotenv.config();
const PORT = 3001;
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD))
  .then(() => {
    console.log("Connected to MongoDB");
  });

app.use("/api/auth", authRoute);

app.listen(PORT, (req, res) => {
  console.log("Listening on port " + PORT);
});
