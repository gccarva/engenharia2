const mongoose = require('mongoose');

const PontosSchema = new mongoose.Schema(
      {
            pontos: Number,
            dia: String
      }
);

module.exports = mongoose.model('Pontos', PontosSchema);