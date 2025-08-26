const express = require("express");
const app = express();
const bcrypt = require('bcrypt');

const con = require('./db');
//...........middleware........
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//register password just for input initial user data
app.post('/register', (req, res) => {
    const {username, password} = req.body;
    // Hash the password
    bcrypt.hash(password, 10, function(err, hash) {
        if(err) {
            return res.status(500).send('Hashing error');
        }
        const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
        con.query(sql, [username, hash], function(err, results) {
            if(err) {
                return res.status(500).send("Database server error");
            }
            res.send("Registration successful!");
        });
    });
});
//login

//All expense
 
//Todays expense

//seraching

//adding

//delete

//connection
app.listen(3000, () => {
  console.log("Server is running...");
});