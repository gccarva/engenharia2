const mongoose = require('mongoose');

const DinossauroSchema = new mongoose.Schema(
      {
            nome: String,
            peso: Number,
            altura: Number,
            fotos: [String],
            velocidade: Number
      }
);

module.exports = mongoose.model('Dinossauro', DinossauroSchema);