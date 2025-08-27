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
app.get("/expenses/today/:userId", (req, res) => {
  const { userId } = req.params;
  const today = new Date().toISOString().substring(0, 10);

  try {
    const userExpenses = expenses.filter(
      (exp) => exp.userId === parseInt(userId) && exp.date === today
    );

    if (userExpenses.length > 0) {
      res.status(200).json({ expenses: userExpenses });
    } else {
      res.status(200).json({ expenses: [], message: "No expenses found for today" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//seraching

//adding

//delete

//connection
app.listen(3000, () => {
  console.log("Server is running...");
});