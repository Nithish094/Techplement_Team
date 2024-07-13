const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3050;

app.use(express.json());
app.use(cors());
app.options('*', cors());

const usersdb = new sqlite3.Database(path.join(__dirname, 'Users.db'));
const logsdb = new sqlite3.Database(path.join(__dirname, 'LogDetails.db'));

usersdb.serialize(() => {
  usersdb.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT, password TEXT)");
});

logsdb.serialize(() => {
  logsdb.run("CREATE TABLE IF NOT EXISTS Details (id INTEGER PRIMARY KEY, CalculatorName TEXT, Inputs TEXT, Outputs TEXT, Time DATE)");
});

app.post('/users/register', (req, res) => {
  const { name, email, password } = req.body;
  usersdb.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'User added', id: this.lastID });
  });
});

app.post('/users/login', (req, res) => {
  const { email, password } = req.body;
  usersdb.get("SELECT * FROM users WHERE email = ?", email, (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (row) {
      if (row.email === email && row.password === password) {
        res.json({ message: "Login success", user: row });
      } else {
        res.json({ message: "Login Failed" });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
});

app.post('/details/add', (req, res) => {
  const { CalculatorName, Inputs, Outputs } = req.body;
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false // Use 24-hour format
  };
  const currentTime = new Date().toLocaleString('en-US', options);

  logsdb.run("INSERT INTO Details (CalculatorName, Inputs, Outputs, Time) VALUES (?, ?, ?, ?)", [CalculatorName, Inputs, Outputs, currentTime], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Log Details Updated', id: this.lastID });
  });
});

app.get('/logs', (req, res) => {
  logsdb.all("SELECT * FROM Details", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ users: rows });
  });
});

app.delete('/log/:id', (req, res) => {
  const { id } = req.params;
  logsdb.run("DELETE FROM Details WHERE id = ?", id, function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Log detail deleted' });
  });
});

// Serve frontend static files

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
