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
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

ProsthesisSchema.post('save',{ document: true, query: false }, function(next) {
  //@ts-ignore
  this.updatedAt = Date.now();
  console.log('updating')
  return next();
});

const Prosthesis = mongoose.model('Prosthesis', ProsthesisSchema);

export default Prosthesis;
