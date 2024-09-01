const mongoose = require('mongoose');
const IDinossauroDAO = require('./IDinossauroDAO.js');
const Dinossauro = require('../models/Dinossauro');

class UsuarioDAO_Mongoose extends IDinossauroDAO {

  constructor() {
    super();
    mongoose.connect('mongodb+srv://leandrovaguetti:engsoft2@poli.ihq71yz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  //
  async create(req) {
    const dinossauro = await Dinossauro.create(req.body);
    return dinossauro;
  }
  //
  async findbyid(req) {
    let dinossauro = await Dinossauro.find(
      {
        _id: req.query.id,
      }
    );
    return dinossauro;
  }
  async findall(req) {
    let dinossauros = await Dinossauro.find();
    return dinossauros;
  }
  async addfoto(req) {
    const dinossauro = await Dinossauro.findById(req.query.id);

    if (!dinossauro) {
      console.log('Dinossauro não encontrado');
      return;
    }

    if (dinossauro.fotos.length >= 4) {
      console.log('O dinossauro já tem o máximo de 4 fotos.');
      return;
    }
    dinossauro.fotos.push(req.query.fotoid);
    await dinossauro.save();
  }
}
module.exports = UsuarioDAO_Mongoose;