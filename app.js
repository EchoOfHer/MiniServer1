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
// DELETE expense by ID
app.delete("/deleteexpense", (req, res) => {
  const { user_id, expense_id } = req.body;

  if (!user_id || !expense_id) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const sql = "DELETE FROM expenses WHERE id = ? AND user_id = ?";
  con.query(sql, [expense_id, user_id], (err, result) => {
    if (err) {
      console.error("Error deleting expense:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Expense not found or not owned by user" });
    }

    res.json({ message: "Expense deleted successfully" });
  });
});



//connection
app.listen(3000, () => {
  console.log("Server is running...");
});