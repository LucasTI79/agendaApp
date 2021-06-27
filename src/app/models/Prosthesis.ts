import mongoose from "../../database/mongo";

const ProsthesisSchema = new mongoose.Schema({
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
  status: {
    type: String,
    default: 'para ser enviado'
  },
  createdAt: {
    type: Date,
    default: Date.now,
},
});


const Prosthesis = mongoose.model('Prosthesis', ProsthesisSchema);

export default Prosthesis;
