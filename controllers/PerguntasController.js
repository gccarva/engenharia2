const IPerguntasController = require('./IPerguntasController');


const config = require('../config.js');
const PerguntasDAO = require('../persistencelayer/dao/' + config.IPerguntasDAO);
let perguntasDAO = new PerguntasDAO();

class PerguntasController extends IPerguntasController {
  constructor() {
    super();
  }
  async getperguntabytemas(req, res) {
    let perguntas = await perguntasDAO.search(req);
    return res.json(perguntas);
  }
  async create(req, res){
    let pergunta = await perguntasDAO.create(req);
    return res.json(ponto);
  }
}
module.exports = pergunta;