const IUsuarioController = require('./IUsuarioController.js');


const config = require('../config.js');
const UsuarioDAO = require('../persistencelayer/dao/' + config.IUsuarioDAO);
let usuarioDAO = new UsuarioDAO();

class UsuarioController extends IUsuarioController {
  constructor() {
    super();
  }
  async login(req, res) {
    let user = await usuarioDAO.search(req);
    return res.json(user);
  }
  async create(req, res) {
    let user = await usuarioDAO.create(req);
    return res.json(user);
  }
}
module.exports = UsuarioController;