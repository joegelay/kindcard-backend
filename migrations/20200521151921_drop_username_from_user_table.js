exports.up = async function(knex) {
    await knex.schema.table("user", table => {
        table.dropColumn('username')
    })
};

exports.down = async function(knex) {
    await knex.schema.table("user", table => {
        table.string("username")
    })
};