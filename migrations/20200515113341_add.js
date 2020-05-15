exports.up = async function(knex) {
    await knex.schema.createTable("card", table => {
        table.increments()
        table.string("number")
  })
  
    await knex.schema.table("story", table => {
        table.integer("cardId").references("id").inTable("card")
  })
};

exports.down = async function(knex) {
    await knex.schema.table("story", table => {
        table.dropColumn("cardId")
  })

  await knex.schema.dropTableIfExists("card")
};
