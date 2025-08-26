const express = require("express");
const app = express();
const bcrypt = require('bcrypt');

const con = require('./db');
//...........middleware........
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let expenses = [];
//register password just for input initial user data

//login

//All expense
app.get("/expenses", (req, res) => {
  if (expenses.length > 0) {
    res.status(200).json({ expenses });
  } else {
    res.status(200).json({ expenses: [] }); // safer than 404
  }
});


 
//Todays expense

//seraching

//adding

//delete

//connection
app.listen(3000, () => {
  console.log("Server is running...");
});