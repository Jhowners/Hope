const express = require('express')
const app = express()

app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Hello from roooooooot")
})

app.get("/users",(req, res) => {
    var user1 = {firstName: "Anthony", lastName: "Don"}
    var user1 = {firstName: "Mario", lastName: "Kim"}
    res.json(user1)
})

//localhost:3003
app.listen(3003, () => {
    console.log('Server running...')
})