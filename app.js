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

  // SQL query ดึงข้อมูลทั้งหมดของ user
  const sql = "SELECT * FROM expenses WHERE user_id = ?";
  con.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("Error fetching expenses:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.status(200).json({
      expenses: results.length > 0 ? results : [],
      message: results.length === 0 ? "No expenses found" : undefined
    });
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