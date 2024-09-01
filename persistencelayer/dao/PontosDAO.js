const mongoose = require('mongoose');
const IPontosDAO = require('./IPontosDAO.js');
const Pontos = require('../models/Pontos.js');

class PontosDAO_Mongoose extends IPontosDAO {

  constructor() {
    super();
    mongoose.connect('mongodb+srv://leandrovaguetti:engsoft2@poli.ihq71yz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  //
  async create(req) {
    const ponto = await Pontos.create(req.body);
    return ponto;
  }
  //
  async getall(req) {
    let pontos = await Pontos.find(
    );
    return pontos;
  }

}
module.exports = PontosDAO_Mongoose;