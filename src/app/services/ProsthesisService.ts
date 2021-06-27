import Prosthesis from '../models/Prosthesis';

interface ProsthesisInterface {
  isbn: string,
  name: string,
  dr: string,
  service: string,
  status?: string
}

class ProsthesisService {
  async index(){
    return await Prosthesis.find();
  }
  async create(data: ProsthesisInterface ){
    return await Prosthesis.create(data);
  }
  async show(isbn: string){
    return await Prosthesis.findOne({ isbn });
  }
  async update(isbn: string, status: string){
    return await Prosthesis.findOneAndUpdate({ isbn },{ $set: {status} }, { new: true })
  }
  async delete( isbn: string ){
    return await Prosthesis.findOneAndRemove({ isbn });
  }
}

export default ProsthesisService;
