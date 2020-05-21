exports.up = async function(knex) {
    await knex.schema.table("user", table => {
        table.unique("email")
        table.unique("username")
    })
};

exports.down = async function(knex) {
    await knex.schema.table("user", table => {
        table.dropUnique('email')
        table.dropUnique('username')
    })
};