const IPontosController = require('./IPontosController');


const config = require('../config.js');
const PontosDAO = require('../persistencelayer/dao/' + config.IPontosDAO);
let pontosDAO = new PontosDAO();

class PontosController extends IPontosController {
  constructor() {
    super();
  }
  async getbyuser(req, res) {
    let pontos = await pontosDAO.search(req);
    return res.json(pontos);
  }
  async create(req, res){
    let ponto = await pontosDAO.create(req);
    return res.json(ponto);
  }
}
module.exports = PontosController;