// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealers.db3'
    },
    useNullAsDefault: true,
  //tells knex where to put the migrations folder
  migrations:{
    directory:'./data/migrations'
  },
  //tells knex where to put the seeds folder 
seeds: {
directory:'./data/seeds'
}
  }
};
