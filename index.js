const express = require('express')
const app = express()

const port = process.env.PORT || 4000

const User = require('./models/User')

app.get("/users", (request, response) => {
    User.query().withGraphFetched('cards').then(users => {
        response.json({ users })
    })
})

const Card = require('./models/Card')

app.get("/cards", (request, response) => {
    Card.query().then(cards => {
        response.json({ cards })
    })
})

app.listen(port)