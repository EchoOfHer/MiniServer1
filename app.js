const express = require("express");
const app = express();
const bcrypt = require('bcrypt');

const con = require('./db');
//...........middleware........
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const expenses = [
  { id: 1, item: "Groceries", amount: 500, date: "2023-10-27" },
  { id: 2, item: "Dinner with friends", amount: 750, date: "2023-10-26" },
  { id: 3, item: "Coffee", amount: 80, date: "2023-10-27" },
  { id: 4, item: "Movie ticket", amount: 180, date: "2023-10-25" },
];

//register password just for input initial user data

//login

//All expense
 
//Todays expense

//seraching
app.get("/searching", (req, res) => {
  const keyword = (req.query.q || "").toLowerCase();

  if (!keyword) {
    return res.status(400).send("Keyword is required");
  }

  // The 'expenses' variable is now defined at the top of the file
  const results = expenses.filter(exp =>
    exp.item.toLowerCase().includes(keyword)
  );

  if (results.length === 0) {
    return res.status(200).send("No matching expenses found");
  }

  res.json(results); // ส่ง JSON กลับไปให้ Dart
});
//adding

//delete

//connection
app.listen(3000, () => {
  console.log("Server is running...");
});