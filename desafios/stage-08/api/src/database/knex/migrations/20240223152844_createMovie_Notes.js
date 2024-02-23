exports.up = knex => knex.schema.createTable('MovieNotes', table => {
    table.increments('id')
    table.text('title')
    table.text('description')
    table.integer('rating') /*Notas de 1 - 5*/
    table.integer('user_id').references('id').inTable('users')

    table.timestamp('created_at').default(knex.fn.now())
    table.timestamp('updated').default(knex.fn.now())
} );


exports.down = knex => knex.schema.dropTable('MovieNotes')
