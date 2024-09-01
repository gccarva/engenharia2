const mongoose = require('mongoose');
const ITemasDAO = require('./ITemasDAO.js');
const Temas = require('../models/Temas.js');

class TemasDAO_Mongoose extends ITemasDAO {

  constructor() {
    super();
    mongoose.connect('mongodb+srv://leandrovaguetti:engsoft2@poli.ihq71yz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  //
  async create(req) {
    const tema = await Temas.create(req.body);
    return tema;
  }
  //
  async getall(req) {
    let temas = await Temas.find(
    );
    return temas;
  }

}
module.exports = TemasDAO_Mongoose;