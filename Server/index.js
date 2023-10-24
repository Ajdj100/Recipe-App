const express = require('express')
const mysql = require('mysql2')
const cors = require('cors');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Thataj100!',
    database: 'foodapp'
})
con.connect()
const app = express()
const port = 8080
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/login', (req, res) => {

    var sql = `SELECT * FROM users WHERE username='${req.body.Username}' AND password='${req.body.Password}'`
    con.query(sql, function (err, result) {
        if (err) throw (err)

        if (result.length == 1) {
            console.log("good");
            res.status(200).json({user: req.body.Username});
        } else {
            console.log("bad");
            res.status(401).send("Invalid Credentials");
        }

    })
})

app.post('/register', (req, res) => {
    console.log("create account");
    console.log("BODY " + req.body);
    var sql = `INSERT INTO users (username, password) 
    VALUES ('${req.body.Username}', '${req.body.Password}');`
    con.query(sql, function (err, result) {
        if (err) throw (err)
        console.log("user created");
        res.status(201).json({user: req.body.Username});
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})