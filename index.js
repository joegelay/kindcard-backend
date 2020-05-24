require("dotenv").config()

const express = require('express')
const app = express()
const database = require('./models/database-connection')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const axios = require('axios')

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

app.get("/stories/:email", (request, response) => {
    const cardNumbers = []
    const allCards = []
    let userCards = []

    database("story").select().where({ email: request.params.email })
     .then(stories => {
         stories.forEach(story => {
             cardNumbers.push(story.number)
         })
         Card.query().withGraphFetched('stories').then(cards => {
            cards.forEach(card => {
                allCards.push(card)
            })
            userCards = allCards.filter((card) => cardNumbers.includes(card.number))
            response.json({ userCards })
        })
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

app.post('/cards', (request, response) => {
    database("card").insert(request.body).returning('*')
      .then(cards => response.json({card: cards[0]}))
})

function addEmailToMailchimp(email, cardNumber) {
    axios({
        method: 'POST',
        url: 'https://us19.api.mailchimp.com/3.0/lists/94ed336b72/members', 
        headers: {
            'Content-Type': 'application/json',
        },
        auth: {
            username: "anystring",
            password: process.env.MAILCHIMPAPI
        },
        data: {
            email_address: email,
            email_type: "html",
            status: "subscribed",
            merge_fields: {
                FNAME: "",
                MMERGE3: cardNumber,
                LNAME: ""
            }
        }
    })
    .catch((error) => {
        console.log({error: error})
    })
}

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
    
    addEmailToMailchimp(request.body.email, request.body.number)
})



app.post('/users', (request, response) => {
    const { email, password } = request.body

    bcrypt.hash(password, 12).then(hashedPassword => {
        database("user").insert({
            email, 
            password: hashedPassword
        }).returning('*')
        .then(users => {
            response.json({user: users[0], message: "Account created!"})
        })
        .catch((error) => {
            response.json({message: "A user already exists with this email!"})
        })
    })
})

app.post('/login', async (request, response) => {
    const { email, password } = request.body
    const user = await database("user").select().where("email", email).first()

    if (!user) {
        // response.sendStatus(401)
        response.json({message: "Incorrect email or password"})
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordMatch) {
        // response.sendStatus(401)
        response.json({message: "Incorrect email or password"})
    }

    const token = jwt.sign({
        id: user.id, 
        email: user.email
        }, process.env.SECRET)

    response.json({ token: token, message: "Logged in!" })
})

app.get("/admin", authenticate, (request, response) => {
    if ( request.user.email = "joegelay@gmail.com" ) {
        response.json({
            secretInfo: "Here you go!"
        })
    }

    console.log(request.user)
})

async function authenticate(request, response, next){
    const token = request.headers.authorization
   
    if (!token) {
        response.sendStatus(403)
    }

    let id
    try {
       id = jwt.verify(token, process.env.SECRET).id
    } catch(error){
        response.sendStatus(403)
    }

    const user = await database("user").select().where("id", id).first()

    request.user = user 

    next()
}


app.listen(port)