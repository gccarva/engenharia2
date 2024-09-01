const IDinossoaurController = require('./IDinossoaurController.js');


const config = require('../config.js');
const DinossauroDAO = require('../persistencelayer/dao/' + config.IDinossauroDAO);
let dinossauroDAO = new DinossauroDAO();

class DinossauroController extends IDinossoaurController {
  constructor() {
    super();
  }
  async findall(req, res) {
    let dinos = await dinossauroDAO.findall(req);
    return res.json(dinos);
  }
  async create(req, res) {
    let dino = await dinossauroDAO.create(req);
    return res.json(dino);
  }
  async findbyid(req, res) {
    let dino = await dinossauroDAO.findbyid(req);
    return res.json(dino);
  }
  async addfoto(req, res) {
    let dino = await dinossauroDAO.addfoto(req);
    return res.json(dino);
  }
}
module.exports = DinossauroController;