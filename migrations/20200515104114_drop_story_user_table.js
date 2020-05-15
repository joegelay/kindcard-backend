exports.up = async function(knex) {
    await knex.schema.dropTableIfExists("story_user")
};

exports.down = async function(knex) {
    await knex.schema.createTable("story_user", table => {
        table.increments()
        table.integer("story_id").references("id").inTable("story")
        table.integer("user_id").references("id").inTable("user")
    });
};
