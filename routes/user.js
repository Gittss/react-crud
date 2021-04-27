const router = require("express").Router();
const { json } = require("express");
const User = require("../models/user");

router.get("/view/:id", (req, res) => {
  User.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else console.log(err);
  });
});

router.route("/createUser").post((req, res) => {
  var user = new User(req.body);
  user.save((err) => {
    if (!err) {
      res.send(user);
    } else console.log(err);
  });
});

router.get("/viewAll", (req, res) => {
  User.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else console.log(err);
  });
});

router.post("/update/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
    if (!err) res.send(doc);
    else console.log(err);
  });
});

router.get("/delete/:id", (req, res) => {
  console.log("DELEEE");
  User.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
      console.log(doc);
    } else console.log(err);
  });
});

module.exports = router;
