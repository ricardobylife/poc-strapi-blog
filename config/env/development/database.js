module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "mepcms-databases.c8zj6owqn1oo.us-east-1.rds.amazonaws.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "mepcmsstrapi"),
      user: env("DATABASE_USERNAME", "mepcms"),
      password: env("DATABASE_PASSWORD", "w7EfQ2WEQal_dMNtXJ7whWssbDuUMH2_"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
