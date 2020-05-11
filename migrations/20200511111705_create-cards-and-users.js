exports.up = async function(knex) {
    await knex.schema.createTable("card", table => {
        table.increments()
        table.string("number")
        table.string("email")
        table.string("location")
        table.text("story")
  })

    await knex.schema.createTable("user", table => {
        table.increments()
        table.string("name")
  })

    await knex.schema.createTable("card_user", table => {
        table.increments()
        table.integer("card_id").references("id").inTable("card")
        table.integer("user_id").references("id").inTable("user")
  })

    return true 
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("card_user")
    await knex.schema.dropTableIfExists("user")
    await knex.schema.dropTableIfExists("card")

    return true 
};
