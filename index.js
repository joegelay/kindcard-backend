const express = require('express')
const app = express()
const database = require('./models/database-connection')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const cors = require('cors')
const User = require('./models/User')
const Story = require('./models/Story')
const Card = require('./models/Card')

app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 4000

app.get("/cards", (request, response) => {
    Card.query().withGraphFetched('stories').then(cards => {
        response.json({ cards })
    })
})

app.get("/cards/:number", (request, response) => {
    Card.query().where({ number: request.params.number }).first().withGraphFetched('stories').then(card => {
        response.json({ card })
    })
})

app.get("/users", (request, response) => {
    User.query().withGraphFetched('stories').then(users => {
        response.json({ users })
    })
})

app.get("/stories", (request, response) => {
    Story.query().then(stories => {
        response.json({ stories })
    })
})

app.get("/stories/:id", (request, response) => {
    database("story").select().where({ id: request.params.id }).first()
     .then(story => {
         response.json({story})
     })
})

app.post('/cards', (request, response) => {
    database("card").insert(request.body).returning('*')
      .then(cards => response.json({card: cards[0]}))
})

app.post('/stories', (request, response) => {
    database("card").select().where({number: request.body.number}).first()
        .then(card => {
            if (card) {
                request.body.cardId = card.id
                database("story").insert(request.body).returning('*')
                    .then(stories => response.json({story: stories[0]}))
            } else {
                database("card").insert({number: request.body.number}).returning('*')
                .then(cards => cards[0])
                .then(card => {
                    request.body.cardId = card.id
                    database("story").insert(request.body).returning('*')
                    .then(stories => response.json({story: stories[0]}))
                })
            }
        })
})

// app.post('/users', (request, response) => {
//     database("user").insert(request.body).returning('*')
//       .then(users => response.json({user: users[0]}))
// })
app.post('/users', (request, response) => {
    const { email, username, password } = request.body

    bcrypt.hash(password, 12).then(hashedPassword => {
        response.json({ username, hashedPassword })
    })
})


app.listen(port)