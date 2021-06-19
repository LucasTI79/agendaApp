import mongoose from 'mongoose'

// mongoose.connect('mongodb://localhost/nodechat',{ 
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex:true,
//     useFindAndModify:false
// });

mongoose.connect('mongodb+srv://lucas:020918@cluster0.xphxz.mongodb.net/nodeagenda?retryWrites=true&w=majority',{ 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:false
});

mongoose.Promise = global.Promise;

export default mongoose
