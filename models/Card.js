const { Model } = require('objection')
const database = require('./database-connection')
Model.knex(database)

const Story = require('./Story')

module.exports = class Card extends Model {
    static get tableName() {
        return 'card'
    }
    static relationMappings = {
        stories: {
            relation: Model.HasManyRelation,
            modelClass: Story,
            join: {
                from: 'card.id',
                to: 'story.cardId'
            }
        }
    }
}