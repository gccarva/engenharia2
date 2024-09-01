const mongoose = require('mongoose');
const IFotosDAO = require('./IFotosDAO.js');
const Fotos = require('../models/Fotos.js');

class FotosDAO_Mongoose extends IFotosDAO {

  constructor() {
    super();
    mongoose.connect('mongodb+srv://leandrovaguetti:engsoft2@poli.ihq71yz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  //
  async create(req) {
    const foto = await Fotos.create(req.body);
    return foto;
  }
  //
  async getall(req) {
    let fotos = await Fotos.find(
    );
    return fotos;
  }

}
module.exports = FotosDAO_Mongoose;