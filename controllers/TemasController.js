const ITemasController = require('./ITemasController');


const config = require('../config.js');
const TemasDAO = require('../persistencelayer/dao/' + config.ITemasDAO);
let temasDAO = new TemasDAO();

class TemasController extends ITemasController {
  constructor() {
    super();
  }
  async gettemasbyperguntas(req, res) {
    let temas = await temasDAO.search(req);
    return res.json(temas);
  }
  async create(req, res){
    let tema = await temasDAO.create(req);
    return res.json(tema);
  }
}
module.exports = TemasController;