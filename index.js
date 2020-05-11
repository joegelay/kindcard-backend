const express = require('express')
const app = express()

const { Model } = require('objection')
const knex = require('knex')
const config = require('./knexfile')[process.env.NODE_ENV || "development"]
const database = knex(config)

Model.knex(database)

class Card extends Model {
    static get tableName() {
        return 'card'
    }
}

class User extends Model {
    static get tableName() {
        return 'user'
    }
    static relationMappings = {
        cards: {
            modelClass: Card,
            relation: Model.ManyToManyRelation,
            join: {
                from: 'user.id',
                through: {
                    from: 'card_user.user_id',
                    to: 'card_user.card_id',
                },
                to: 'card.id',
            }
        }
    }
}


const port = process.env.PORT || 4000

app.get("/users", (request, response) => {
    User.query().withGraphFetched('cards').then(users => {
        response.json({ users })
    })
})

app.get("/cards", (request, response) => {
    Card.query().then(cards => {
        response.json({ cards })
    })
})

app.listen(port)