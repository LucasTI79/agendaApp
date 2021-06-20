import dotenv from 'dotenv';
import app from './app';
import 'reflect-metadata';
import './database/connection';

dotenv.config();

app.listen(process.env.PORT || 3333, () => {
  console.log('🏃 Running Server');
});
