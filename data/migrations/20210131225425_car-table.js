
exports.up = function(knex) {
    return knex.schema.createTable('cars', t => {
        t.increments('id')
        t.integer('vin',)
        t.string('make', 30).notNullable()
        t.string('model', 30).notNullable()
        t.integer('millage')
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
