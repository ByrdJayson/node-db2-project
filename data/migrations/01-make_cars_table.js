exports.up = async function (knex) {
  await knex.schema.createTable('cars', table => {
    table.increments()
    table.text('vin').unique().notNullable()
    table.text('make').notNullable()
    table.text('model').notNullable()
    table.integer('mileage').notNullable()
    table.text('title').nullable()
    table.text('transmission').nullable()
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
};
