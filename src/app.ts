import express from 'express'
import "reflect-metadata"
import "./database/connection"
import routes from './routes'
import cors from 'cors';

const app = express();

app.use(cors())
app.set('port', process.env.PORT || 3333);
app.use(express.json())
app.use(routes)

export { app }

