const express = require("express");
const app = express();
const bcrypt = require('bcrypt');

const con = require('./db');
//...........middleware........
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//register password just for input initial user data

//login

//All expense
 
//Todays expense
app.get("/expenses/today/:userId", (req, res) => {
  const userId = req.params.userId;
  const today = new Date().toISOString().substring(0, 10); // YYYY-MM-DD

  const todayExpenses = expenses.filter(
    (exp) => exp.userId === userId && exp.date.startsWith(today)
  );

  res.status(200).json({ expenses: todayExpenses });
})

//seraching

//adding

//delete

//connection
app.listen(3000, () => {
  console.log("Server is running...");
});