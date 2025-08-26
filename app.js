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
app.delete('/deleteexpense', async (req, res) => {
  const { user_id, expense_id } = req.query;

  if (!user_id || !expense_id) {
    return res.status(400).json({ error: "Missing user_id or expense_id" });
  }

  try {
    const [result] = await promiseDb.query(
      "DELETE FROM expenses WHERE id = ? AND user_id = ?",
      [expense_id, user_id]
    );

    if (result.affectedRows > 0) {
      res.json({ message: "Deleted successfully" });
    } else {
      res.status(404).json({ error: "Expense not found or unauthorized" });
    }
  } catch (err) {
    console.error("Delete error:", err); // สำคัญมาก
    res.status(500).json({ error: "Server error" });
  }
});



//connection
app.listen(3000, () => {
  console.log("Server is running...");
});