const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/employee");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const url = process.env.MONGODB_URL;
mongoose.connect(url);

app.post("/login", (req, res) => {
  const { email, password } = req.body.login;
  EmployeeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("success");
        } else {
          res.json("Password is Incorrect");
        }
      } else {
        res.json("No Record existed");
      }
    })
    .catch((err) => res.json(err));
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body.signUp)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("app is running");
});
