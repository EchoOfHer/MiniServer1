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
app.get("/expenses/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const userExpenses = expenses.filter(exp => exp.userId === userId);

  res.status(200).json({
    expenses: userExpenses.length > 0 ? userExpenses : [],
    message: userExpenses.length === 0 ? "No expenses found" : undefined
  });
});

 
//Todays expense

//seraching

//adding

//delete

//connection
app.listen(3000, () => {
  console.log("Server is running...");
});