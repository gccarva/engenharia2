const mongoose = require('mongoose');
const IPerguntasDAO = require('./IPerguntasDAO.js');
const Perguntas = require('../models/Perguntas.js');

class PerguntasDAO_Mongoose extends IPerguntasDAO {

  constructor() {
    super();
    mongoose.connect('mongodb+srv://leandrovaguetti:engsoft2@poli.ihq71yz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  //
  async create(req) {
    const pergunta = await Perguntas.create(req.body);
    return pergunta;
  }
  //
  async getall(req) {
    let perguntas = await Perguntas.find(
    );
    return perguntas;
  }

}
module.exports = PerguntasDAO_Mongoose;