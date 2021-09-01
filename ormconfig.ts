module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "migrations": [process.env.MIGRATIONS],
  "entities": [process.env.ENTITIES],
  "synchronize": false,
  "logging": false,
  "cli": {
    "migrationsDir": ["src/database/migrations"],
    "entitiesDir": "src/app/models"
  },
  // "ssl": true,
  // "extra": {
  //   "ssl": {
  //     "rejectUnauthorized": false
  //   }
  // }
}
  // {
  //   "name": 'seed',
  //   "type": "postgres",
  //   "url": process.env.DATABASE_URL,
  //   "migrations": [process.env.MIGRATIONS],
  //   "entities": [process.env.ENTITIES],
  //   "synchronize": false,
  //   "logging": false,
  //   "cli": {
  //     "migrationsDir": ["src/database/seedes"],
  //     "entitiesDir": "src/app/models"
  //   },
  // }

