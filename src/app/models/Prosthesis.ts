import Mongoose from "../../database/mongo";

const ProsthesisSchema = new Mongoose.Schema({
  isbn: {
    type: String,
    require:true
  },
  name: {
    type: String,
    require: true
  },
  dr: {
    type: String,
    require: true,
  },
  service: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
},
});


const Prosthesis = Mongoose.model('Prosthesis', ProsthesisSchema);

export default Prosthesis;
