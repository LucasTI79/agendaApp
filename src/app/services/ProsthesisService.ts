import Prosthesis from '../models/Prosthesis';

class ProsthesisService {
  async index(){
    const response = await Prosthesis.find()
    return response
  }
  async create(data: {}){
    const prosthesis = await Prosthesis.create(data)
  }
}

export default ProsthesisService;
