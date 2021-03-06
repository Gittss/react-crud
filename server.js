require("dotenv/config");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const path = require("path");

var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("express server started at " + process.env.PORT);
});

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (!err) {
      console.log("Database connected");
    } else console.log(err);
  }
);

app.use("/user", userRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
