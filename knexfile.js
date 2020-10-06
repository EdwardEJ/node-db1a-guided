// Update with your config settings.

module.exports = {
  //configuration for the development environment
  development: {
    client: 'sqlite3', //database driver
    connection: {
      filename: './database/food.db3', //while file am I using
    },
    useNullAsDefault: true,
  },
  //configuration for the production environment
  production: {
    client: 'postgresql',
    connection: {
      // host: '',
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
