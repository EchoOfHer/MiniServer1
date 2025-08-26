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
// Get ALL expenses
app.get("/expenses", (req, res) => {
  const sql = "SELECT * FROM expenses";
  con.query(sql, (err, results) => {
    if (err) return res.status(500).send("Database error");
    res.json(results);
  });
});

// Get expenses for a specific user
app.get("/expenses/:userId", (req, res) => {
  const { userId } = req.params;
  const sql = "SELECT * FROM expenses WHERE userId = ?";
  con.query(sql, [userId], (err, results) => {
    if (err) return res.status(500).send("Database error");
    res.json(results);
  });
});

// Add a new expense
app.post("/expenses", (req, res) => {
  const { userId, item, paid, date } = req.body;
  const sql =
    "INSERT INTO expenses (userId, item, paid, date) VALUES (?, ?, ?, ?)";
  con.query(sql, [userId, item, paid, date], (err, result) => {
    if (err) return res.status(500).send("Database error");
    res
      .status(201)
      .json({ id: result.insertId, userId, item, paid, date });
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