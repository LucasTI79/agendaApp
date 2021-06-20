module.exports = {
  "type": "postgres",
  "url": process.env.DATABSE_URL,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "migrations": './dist/src/database/migrations/**/*.js',
  "entities": './dist/src/app/models/**/*.js',
  "synchronize": false,
  "logging": false,
  "cli": {
   "migrationsDir": ["src/database/migrations"],
   "entitiesDir": "src/app/models/"
  }
}
