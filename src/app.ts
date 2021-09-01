import express from 'express';
import cors from 'cors';
import routes from './app/routes/';

const app = express();

app.use(cors({
  origin: '*'
}));
app.set('port', process.env.PORT || 3333);
app.use(express.json());
app.use(routes);

export default app;
