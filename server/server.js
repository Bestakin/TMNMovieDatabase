const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

// MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'projectdb'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

app.use(cors(), bodyParser.json());

// Endpoint to receive and store data
app.post('/saveData', (req, res) => {
    const data = req.body;
    console.log("FROM CLIENT: ", data);
    // db.query(`INSERT INTO players (\`firstName\`, \`lastName\`) VALUES (\`${data.firstName}\`, \`${data.lastName}\`)`,
    //     data, (err, result) => {
    //         console.log(err, result);
    //     }
    // );
    res.json({ message: 'Data saved successfully' });
});

// Endpoint to retrieve data
app.get('/genres', (req, res) => {
    db.query('SELECT * FROM genre', (err, rows) => {
        res.json({ data: rows });
    });
});

app.get('/movies', (req, res) => {
    db.query('SELECT * FROM movie', (err, rows) => {
        res.json({ data: rows });
    });
});

app.get('/movies/top_rated', (req, res) => {
    db.query('SELECT * FROM movie', (err, rows) => {
        res.json({ data: rows });
    });
});

app.get('/movies/trending', (req, res) => {
    db.query('SELECT * FROM movie', (err, rows) => {
        res.json({ data: rows });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
