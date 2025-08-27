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
  const userId = parseInt(req.params.userId);
  const today = new Date().toISOString().substring(0, 10); // "YYYY-MM-DD"

  const sql = "SELECT * FROM expenses WHERE user_id = ? AND DATE(date) = ?";
  con.query(sql, [userId, today], (err, results) => {
    if (err) {
      console.error("Error fetching today's expenses:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.status(200).json({
      expenses: results.length > 0 ? results : [],
      message: results.length === 0 ? "No expenses found for today" : undefined
    });
  });
});

//seraching

//adding

//delete

//connection
app.listen(3000, () => {
  console.log("Server is running...");
});