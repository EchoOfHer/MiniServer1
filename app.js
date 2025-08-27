const express = require("express");
const app = express();
const bcrypt = require('bcrypt');

const con = require('./db');

//...........middleware........
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let expenses = []; // mutable array to store expenses

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
app.post('/login', (req, res) => {
    const {username, password} = req.body;
    const sql = "SELECT id, username, password FROM users WHERE username = ?";
    con.query(sql, [username], function(err, results) {
        if(err) {
            return res.status(500).send("Database server error");
        }
        if(results.length != 1) {
            return res.status(401).send("Invalid credentials.");
        }
        const user = results[0]; 
        // compare passwords
        bcrypt.compare(password, results[0].password, function(err, same) {
            if(err) {
                return res.status(500).send("Hashing error");
            }
            if(same) {
                return res.status(200).json({
                    message: 'Login successful!',
                    user: { 
                        id: user.id,          
                        username: user.username 
                    }
                });
            }
            return res.status(401).send('Invalid credentials.');
        });
    })
});
//All expense
 
//Todays expense
app.get("/expenses/today/:userId", (req, res) => {
  const { userId } = req.params;
  const today = new Date().toISOString().substring(0, 10);

  try {
    const userExpenses = expenses.filter(
      (exp) => exp.userId === parseInt(userId) && exp.date === today
    );

    if (userExpenses.length > 0) {
      res.status(200).json({ expenses: userExpenses });
    } else {
      res.status(200).json({ expenses: [], message: "No expenses found for today" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//seraching

//adding

app.post("/addexpenses", (req, res) => {
  const { user_id, item, paid } = req.body;

  if (!user_id || !item || !paid) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const sql = "INSERT INTO expenses (user_id, item, paid, date) VALUES (?, ?, ?, NOW())";
  con.query(sql, [user_id, item, paid], (err, result) => {
    if (err) {
      console.error("Error inserting expense:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: "Expense added successfully", expenseId: result.insertId });
  });
});
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