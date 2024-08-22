const mongoose = require('mongoose');

const PontuacaoSchema = new mongoose.Schema(
      {
            pontos: String,
            dia: String,
            user: String
      }
);

module.exports = mongoose.model('Pontuacao', PontuacaoSchema);