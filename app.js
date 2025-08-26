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
  const { expense_id } = req.body;
  if (!expense_id) return res.status(400).send("Missing expense ID");

  try {
    await db.query("DELETE FROM expenses WHERE id = ?", [expense_id]);
    res.send("Deleted successfully");
  } catch (err) {
    res.status(500).send("Error deleting expense");
  }
});




//connection
app.listen(3000, () => {
  console.log("Server is running...");
});