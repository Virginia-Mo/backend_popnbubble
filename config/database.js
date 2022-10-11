module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ex'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ex'),
      user: env('DATABASE_USERNAME', 'ex'),
      password: env('DATABASE_PASSWORD', 'ex'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
