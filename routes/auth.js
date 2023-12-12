const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
  const newuser = new User({
    username: req.body.username,
    email: req.body.email,
    username: req.body.username,
  });
  await user.save();
  res.send("Ok");
});

module.exports = router;
