const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')


app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('./public'))

app.use(morgan('combined'))

app.post('/user_create', (req, res) => {
    // console.log('Trying to create a new user')
    // console.log("First name: " + users.firstName)
    // console.log("PWD: " + users.password)
    // console.log("Email: " + users.email)
    // console.log("Phone: " + users.phoneNumber)
    const users = {
        firstName: req.body.create_username,
        password: req.body.create_password, 
        email: req.body.create_email, 
        phoneNumber: req.body.create_phoneNumber
    } 
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'hope'
    })

    const queryAddUser = 'INSERT INTO users (first_name, PASSWORD, Email, phoneNumber) VALUES (?, ?, ?, ?)'

    connection.connect(function(err) {
        if (err) throw err;
        console.log('Connected sucessfuly!');
        connection.query(queryAddUser, [users.firstName, users.password, users.email, users.phoneNumber], function (err, result) {
            if (err) throw err;
            console.log('Record inserted.')
        })
    })
    
    res.end()
})

app.get('/users/:id', (req, res) => {
    const userId = req.params.id
    const queryString = "SELECT * FROM users WHERE iduser = ?" 

    console.log("Fethcing user with id: " + req.params.id)

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'hope'
    })
    
    connection.query(queryString, [userId], (err, rows, fields) =>{
        if (err) {
            console.log("Failed to query for users: " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("i think we fetched users successfully")
        const users = rows.map((row) => {
            return {firstName: row.first_name, email: row.Email, phone: row.phoneNumber}
        })
        res.json(users)
    })
    //res.end()
})

// app.get("/", (req, res) => {
//     console.log("Responding to root route")
//     res.send("Hello from roooooooot")
// })

// app.get("/users",(req, res) => {
//     var user1 = {firstName: "Anthony", lastName: "Don"};
//     var user2 = {firstName: "Mario", lastName: "Kim"}
//     res.json([user1, user2])
// })

//localhost:3003
app.listen(3003, () => {
    console.log('Server running...')
})