
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: 1, make: "Audi", model: "R8", millage: 3,  },
        {vin: 333, make: "BMW", model: "X3M", millage: 50, },
        {vin: 653, make: "Alfa Romeo", model: "Giilia", millage: 1, }
      ]);
    });
};
