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
app.get("/searching", (req, res) => {
  const searchTerm = (req.query.q || "").toLowerCase();

  if (!searchTerm) {
    return res.status(400).send("Bad Request: Please provide a search term.");
  }

  const sql = "SELECT * FROM expenses WHERE LOWER(item) LIKE ?";
  const likeTerm = `%${searchTerm}%`;

  con.query(sql, [likeTerm], (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).send("Server Error: Unable to search expenses.");
    }

    if (results.length > 0) {
      res.status(200).json(results);
    } else {
      res.status(200).send(`No item: ${searchTerm}`);
    }
  });
});

//adding

//delete

//connection
app.listen(3000, () => {
  console.log("Server is running...");
});