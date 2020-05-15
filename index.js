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
    User.query().withGraphFetched('stories').then(users => {
        response.json({ users })
    })
})

const Story = require('./models/Story')

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

app.post('/stories', (request, response) => {
    database("story").insert(request.body).returning('*')
      .then(stories => response.json({story: stories[0]}))
})

app.post('/users', (request, response) => {
    database("user").insert(request.body).returning('*')
      .then(users => response.json({user: users[0]}))
})


app.listen(port)