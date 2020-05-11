const { Model } = require('objection')
const database = require('./database-connection')
Model.knex(database)

const Card = require('./Card')

module.exports = class User extends Model {
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