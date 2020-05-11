const { Model } = require('objection')
const database = require('./database-connection')
Model.knex(database)

module.exports = class Card extends Model {
    static get tableName() {
        return 'card'
    }
}