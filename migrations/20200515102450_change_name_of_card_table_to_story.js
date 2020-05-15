exports.up = async function(knex) {
    await knex.schema.renameTable('card', 'story')
};

exports.down = async function(knex) {
    await knex.schema.renameTable('story', 'card')
};
