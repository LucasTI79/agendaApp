import Prosthesis from '../models/Prosthesis';

class ProsthesisService {
  async index(){
    return await Prosthesis.find();
  }
  async create(data: {}){
    return await Prosthesis.create(data);
  }
  async show(isbn: string){
    return await Prosthesis.findOne({ isbn });
  }
}

export default ProsthesisService;
