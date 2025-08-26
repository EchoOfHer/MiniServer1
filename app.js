const express = require("express");
const app = express();
const bcrypt = require('bcrypt');

const con = require('./db');

//...........middleware........
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let expenses = []; // mutable array to store expenses

//register password just for input initial user data

//login

//All expense
 
//Todays expense
app.get("/expenses/today", (req, res) => {
  const today = new Date().toISOString().substring(0, 10);

  const todayExpenses = expenses.filter(exp => exp.date.startsWith(today));

  res.status(200).json({
    expenses: todayExpenses.length > 0 ? todayExpenses : [],
    message: todayExpenses.length === 0 ? "No expenses for today" : undefined
  });
});

//seraching

//adding

//delete

//connection
app.listen(3000, () => {
  console.log("Server is running...");
});