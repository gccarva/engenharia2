const IFotosController = require('./IFotosController.js');


const config = require('../config.js');
const FotosDAO = require('../persistencelayer/dao/' + config.IFotosDAO);
let fotosdao = new FotosDAO();

class FotosController extends IFotosController {
  constructor() {
    super();
  }
  async getfotosbydinossauro(req, res) {
    let foto = await fotosdao.getfotosbydinossauro(req);
    return res.json(foto);
  }
  async create(req, res){
    let foto = await fotosdao.create(req);
    return res.json(foto);
  }
}
module.exports = FotosController;