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
app.delete('/expense/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM expenses WHERE id = ?";
    con.query(sql, [id], function(err, result) {
        if (err) {
            return res.status(500).send("Database error");
        }
        if (result.affectedRows > 0) {
            res.sendStatus(200); // OK
        } else {
            res.status(404).send("Item not found");
        }
    });
});

//connection
app.listen(3000, () => {
  console.log("Server is running...");
});