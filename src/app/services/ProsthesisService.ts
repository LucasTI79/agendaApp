import Prosthesis from '../models/Prosthesis';

class ProsthesisService {
  async index(){
    return await Prosthesis.find()
  }
  async create(data: {}){
    return await Prosthesis.create(data)
  }
}

export default ProsthesisService;
