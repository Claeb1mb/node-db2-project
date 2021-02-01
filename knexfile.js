// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/cars-dealers.db3'
    },
    useNullAsDefault
  },
  //tells knex where to put the migrations folder
  migrations:{
    directory:'./data/migrations'
  },
seeds: {
directory:'./data/migration'
}
};
