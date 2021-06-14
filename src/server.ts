import { app } from "./app";

app.listen(app.get('port'), () => console.log(`App listening in http://localhost:${app.get('port')}`))