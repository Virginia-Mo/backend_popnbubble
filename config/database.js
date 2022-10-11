module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '0.0.0.0'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'popnbubble'),
      user: env('DATABASE_USERNAME', 'popnbubble'),
      password: env('DATABASE_PASSWORD', 'mypopnbubblepassword'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
