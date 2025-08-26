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

//seraching

//adding
app.post("/addexpenses", (req, res) => {
  const { user_id, item, paid } = req.body;

  if (!user_id || !item || !paid) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const sql = "INSERT INTO expense (user_id, item, paid, date) VALUES (?, ?, ?, NOW())";
  con.query(sql, [user_id, item, paid], (err, result) => {
    if (err) {
      console.error("Error inserting expense:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: "Expense added successfully", expenseId: result.insertId });
  });
});
//delete

//connection
app.listen(3000, () => {
  console.log("Server is running...");
});