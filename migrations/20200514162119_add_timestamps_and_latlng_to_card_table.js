exports.up = async function(knex) {
    await knex.schema.table("card", table => {
        table.float("lat")
        table.float("lng")
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
  })
};

exports.down = async function(knex) {
    await knex.schema.table("card", table => {
        table.dropColumn("lat")
        table.dropColumn("lng")
        table.dropColumn("created_at")
        table.dropColumn("updated_at")
  })
};
