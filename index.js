const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(5000, () => {
  console.log("Backend is running!");
});
