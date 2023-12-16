const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

//
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server is running");
});
