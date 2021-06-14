import express from 'express'
import "reflect-metadata"
import "./database/connection"
import routes from './routes'

const app = express();

app.set('port', process.env.PORT || 3333);
app.use(express.json())
app.use(routes)

export { app }

