const { Model } = require('objection')
const database = require('./database-connection')
Model.knex(database)

const Story = require('./Story')

module.exports = class User extends Model {
    static get tableName() {
        return 'user'
    }
    static relationMappings = {
        stories: {
            modelClass: Story,
            relation: Model.ManyToManyRelation,
            join: {
                from: 'user.id',
                through: {
                    from: 'story_user.user_id',
                    to: 'story_user.story_id',
                },
                to: 'story.id',
            }
        }
    }
}