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
app.delete('/expenses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userId = parseInt(req.query.user_id);

  if (!id || !userId) {
    return res.status(400).send('Missing id or user_id');
  }

  const sql = 'DELETE FROM expenses WHERE id = ? AND user_id = ?';
  db.query(sql, [id, userId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Expense not found or unauthorized');
    }
    res.send('Deleted!');
  });
});


//connection
app.listen(3000, () => {
  console.log("Server is running...");
});