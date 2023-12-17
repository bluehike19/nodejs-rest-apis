const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

//
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server is running");
});
