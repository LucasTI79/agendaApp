import * as dotenv from 'dotenv'
import { app } from "./app";
import "reflect-metadata"
import "./database/connection"

dotenv.config()

app.listen(app.get('port'), () => console.log(`App listening...`))
