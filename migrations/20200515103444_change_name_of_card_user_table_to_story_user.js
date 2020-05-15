exports.up = async function(knex) {
    await knex.schema.renameTable('card_user', 'story_user')
};

exports.down = async function(knex) {
    await knex.schema.renameTable('story_user', 'card_user')
};
