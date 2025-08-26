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
app.get('/expenses/:userId', (req, res) => {
  const userId = req.params.userId;
  const today = new Date().toISOString().substring(0, 10); // Get today's date in YYYY-MM-DD format
  const userExpenses = expenses.filter(
    exp => exp.userId === userId && exp.date === today
  );
  
  if (userExpenses.length > 0) {
    res.status(200).json(userExpenses); // Return array of today's expenses
  } else {
    res.status(404).json({ message: 'No expenses found for this user today' });
  }
});


//seraching

//adding

//delete

//connection
app.listen(3000, () => {
  console.log("Server is running...");
});