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

//delete
app.delete("/expenses/:id", (req, res) => {
  const expenseId = req.params.id;

  const sql = "DELETE FROM expenses WHERE id = ?";
  con.query(sql, [expenseId], (err, result) => {
    if (err) {
      console.error("Error deleting expense:", err);
      return res.status(500).json({ message: "Database error" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.json({ message: "Expense deleted successfully" });
  });
});

//connection
app.listen(3000, () => {
  console.log("Server is running...");
});