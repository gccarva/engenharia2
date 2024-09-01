const IFotosController = require('./IFotosController.js');


const config = require('../config.js');
const FotosDAO = require('../persistencelayer/dao/' + config.IFotosDAO);
let fotosdao = new FotosDAO();

class FotosController extends IFotosController {
  constructor() {
    super();
  }
  async getall(req, res) {
    let fotos = await fotosdao.getall(req);
    return res.json(fotos);
  }
  async create(req, res){
    let foto = await fotosdao.create(req);
    return res.json(foto);
  }
}
module.exports = FotosController;