const mongoose = require('mongoose');

const DinossauroSchema = new mongoose.Schema(
      {
            nome: String,
            peso: Number,
            altura: Number,
            fotos: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Fotos',                
            validate: [arrayLimite, '{PATH} excedeu o limite de 4 fotos']
            },
            velocidade: Number
      }
);

module.exports = mongoose.model('Dinossauros', DinossauroSchema);