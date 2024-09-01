const mongoose = require('mongoose');
const IUsuarioDAO = require('./IUsuarioDAO.js');
const Usuario = require('../models/Usuario.js');

class UsuarioDAO_Mongoose extends IUsuarioDAO {

  constructor() {
    super();
    mongoose.connect('mongodb+srv://leandrovaguetti:engsoft2@poli.ihq71yz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  //
  async addpontos(req) {
    const usuario = await Usuario.find(req.body.userid);
    usuario.pontos.push(req.query.pontosid);
    await usuario.save();
    return usuario;
  }
  async addperguntas(req) {
    const usuario = await Usuario.find(req.body.userid);
    usuario.perguntas.push(req.query.perguntaid);
    await usuario.save();
    return usuario;
  }
  async create(req) {
    const usuario = await Usuario.create(req.body);
    return usuario;
  }
  //
  async search(req) {
    let usuario = await Usuario.find(
      {
        email: req.query.email,
        senha: req.query.senha,
      }
    );
    return usuario;
  }

}
module.exports = UsuarioDAO_Mongoose;