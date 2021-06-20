import Mongoose from 'mongoose'

// mongoose.connect('mongodb://localhost/nodechat',{ 
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex:true,
//     useFindAndModify:false
// });

Mongoose.connect(process.env.MONGO_URL as string ,{ 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:false
});

Mongoose.Promise = global.Promise;

export default Mongoose
