const express = require("express");
const app = express();
const bcrypt = require('bcrypt');

const con = require('./db');
let expenses = []; // mutable array to store expenses

//...........middleware........
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//register password just for input initial user data

//login

//All expense
 
//Todays expense
app.get("/expenses/today", (req, res) => {
  const today = new Date().toISOString().substring(0, 10);

  const sql = "SELECT * FROM expenses WHERE date LIKE ?";
  con.query(sql, [today + "%"], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) {
      return res.status(200).json({ expenses: [], message: "No expenses for today" });
    }

    res.status(200).json({ expenses: results });
  });
});


//seraching

//adding

//delete

//connection
app.listen(3000, () => {
  console.log("Server is running...");
});