exports.up = async function(knex) {
    await knex.schema.table("user", table => {
        table.renameColumn('name', 'username')
    })
};

exports.down = async function(knex) {
    await knex.schema.table("user", table => {
        table.renameColumn('username', 'name')
    })
};


