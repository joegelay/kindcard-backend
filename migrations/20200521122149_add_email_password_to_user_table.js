exports.up = async function(knex) {
    await knex.schema.table("user", table => {
        table.string("email")
        table.string("password")
    })
};

exports.down = async function(knex) {
    await knex.schema.table("user", table => {
        table.dropColumn('email')
        table.dropColumn('password')
    })
};