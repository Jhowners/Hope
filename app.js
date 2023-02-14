const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')



app.use(morgan('combined'))

app.get('/users/:id', (req, res) => {
    console.log("Fethcing user with id: " + req.params.id)

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'Hehe'
    })
    connection.query("SELECT * FROM users", (err, rows, fields) =>{
        console.log("i think we fetched users successfully")
        res.json(rows)
    })
    //res.end()
})

app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Hello from roooooooot")
})

app.get("/users",(req, res) => {
    var user1 = {firstName: "Anthony", lastName: "Don"};
    var user2 = {firstName: "Mario", lastName: "Kim"}
    res.json([user1, user2])
})

//localhost:3003
app.listen(3003, () => {
    console.log('Server running...')
})