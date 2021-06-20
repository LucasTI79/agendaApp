import express from 'express'
import routes from './routes'
import cors from 'cors';

const app = express();

app.use(cors())
app.set('port', process.env.PORT || 3333);
app.use(express.json())
app.use(routes)
app.use('/', (req,res) => {
  res.send('Hello World!')
})

export { app }

