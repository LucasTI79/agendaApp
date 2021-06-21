module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "database": process.env.DB_NAME,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "migrations": [process.env.MIGRATIONS],
  "entities": [process.env.ENTITIES],
  "synchronize": false,
  "logging": false,
  "cli": {
   "migrationsDir": ["src/database/migrations"],
   "entitiesDir": "src/app/models/"
  }
}
