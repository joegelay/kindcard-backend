const express = require('express')
const app = express()
const database = require('./models/database-connection')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

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

app.get("/cards/:id", (request, response) => {
    database("card").select().where({ id: request.params.id }).first()
     .then(card => {
         response.json({card})
     })
})

app.get("/cardLocations", (request, response) => {
    Card.query().then(cards => {
        counter = 0 
        numberAndLocation = cards.map(card => {
            return { 
                id: counter += 1, 
                number: card['number'], 
                location: card['location'] 
            }
        })
        response.json(numberAndLocation)
    })
})

app.post('/cards', (request, response) => {
    database("card").insert(request.body).returning('*')
      .then(cards => response.json({card: cards[0]}))
})

app.post('/users', (request, response) => {
    database("user").insert(request.body).returning('*')
      .then(users => response.json({user: users[0]}))
})


app.listen(port)