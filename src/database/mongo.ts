import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()
// mongoose.connect('mongodb://localhost/nodechat',{
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex:true,
//     useFindAndModify:false
// });

mongoose.connect(process.env.MONGO_URL as string ,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:false
});

mongoose.Promise = global.Promise;

export default mongoose
