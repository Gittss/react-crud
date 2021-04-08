const router = require("express").Router();
const { json } = require("express");
const User = require("../models/user");

router.route("/createUser").post((req, res) => {
  var user = new User(req.body);
  user.save((err) => {
    if (!err) {
      console.log("User created" + user);
    }
  });
});

router.get("/viewAll", (req, res) => {
  User.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else console.log(err);
  });
});

router.post("/update:id", (req, res) => {
  User.findById(req.params.id, (err, doc) => {
    if (!err) {
      var user = {
        name: req.body.name,
        phone: req.body.phone,
      };
      User.findByIdAndUpdate(req.params.id, user, (err, updoc) => {
        res.send(updoc);
      });
    } else console.log(err);
  });
});

module.exports = router;
