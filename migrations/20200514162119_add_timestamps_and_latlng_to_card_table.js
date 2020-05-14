exports.up = async function(knex) {
    await knex.schema.table("card", table => {
        table.float("lat")
        table.float("lng")
        table.timestamps()
  })
};

exports.down = async function(knex) {
    await knex.schema.table("card", table => {
        table.dropColumn("lat")
        table.dropColumn("lng")
  })
};
