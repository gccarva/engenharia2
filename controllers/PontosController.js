const IPontosController = require('./IPontosController');


const config = require('../config.js');
const PontosDAO = require('../persistencelayer/dao/' + config.IPontosDAO);
let pontosDAO = new PontosDAO();

class PontosController extends IPontosController {
  constructor() {
    super();
  }
  async create(req, res){
    let ponto = await pontosDAO.create(req);
    return res.json(ponto);
  }
  async getall(req, res){
    let ponto = await pontosDAO.getall(req);
    return res.json(ponto);
  }
}
module.exports = PontosController;